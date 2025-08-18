import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Vote, Clock, User, MessageSquare, ThumbsUp, ThumbsDown } from 'lucide-react';
import { proposals, guilds } from '../data/mockData';
import { useWallet } from '../contexts/WalletContext';

const ProposalDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { isConnected, vote, votedProposals } = useWallet();
  const [hasVoted, setHasVoted] = useState(false);

  const proposal = proposals.find(p => p.id === id);
  const guild = proposal ? guilds.find(g => g.id === proposal.guildId) : null;
  const hasAlreadyVoted = votedProposals.has(id || '') || hasVoted;

  if (!proposal || !guild) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Proposal Not Found</h1>
          <Link to="/" className="text-accent-purple hover:text-purple-400">
            Return to Discover
          </Link>
        </div>
      </div>
    );
  }

  const forPercentage = (proposal.votesFor / proposal.totalVotes) * 100;
  const againstPercentage = (proposal.votesAgainst / proposal.totalVotes) * 100;

  const handleVote = (support: boolean) => {
    if (isConnected && !hasAlreadyVoted) {
      vote(proposal.id, support);
      setHasVoted(true);
    }
  };

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Navigation */}
        <div className="mb-6">
          <Link
            to={`/guild/${guild.id}`}
            className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>Back to {guild.name}</span>
          </Link>
        </div>

        {/* Proposal Header */}
        <div className="bg-surface rounded-2xl p-8 shadow-2xl mb-8">
          <div className="flex items-start justify-between mb-6">
            <div className="flex-1">
              <h1 className="text-3xl font-bold text-white mb-4">{proposal.title}</h1>
              <div className="flex items-center space-x-6 text-sm text-gray-400">
                <div className="flex items-center space-x-2">
                  <User className="h-4 w-4" />
                  <span>Submitted by {proposal.submittedBy}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4" />
                  <span>Created {proposal.createdAt}</span>
                </div>
              </div>
            </div>
            <div className={`px-4 py-2 rounded-lg text-sm font-medium ${
              proposal.status === 'Active' ? 'bg-green-500/20 text-green-400' :
              proposal.status === 'Passed' ? 'bg-blue-500/20 text-blue-400' :
              'bg-red-500/20 text-red-400'
            }`}>
              {proposal.status}
            </div>
          </div>

          {/* Guild Context */}
          <div className="flex items-center space-x-4 p-4 bg-background/50 rounded-lg mb-6">
            <img
              src={guild.profileImage}
              alt={guild.vtuberName}
              className="w-12 h-12 rounded-full border-2 border-accent-purple"
            />
            <div>
              <p className="text-white font-medium">{guild.vtuberName}</p>
              <p className="text-accent-purple text-sm">{guild.name}</p>
            </div>
          </div>

          {/* Description */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-white mb-4">Description</h2>
            <p className="text-gray-300 leading-relaxed">{proposal.description}</p>
          </div>

          {/* Voting Section */}
          <div className="bg-background/50 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-6">Current Voting Results</h3>
            
            {/* Vote Progress Bars */}
            <div className="space-y-4 mb-6">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-green-400 font-medium flex items-center space-x-2">
                    <ThumbsUp className="h-4 w-4" />
                    <span>For ({proposal.votesFor} votes)</span>
                  </span>
                  <span className="text-green-400 font-semibold">{forPercentage.toFixed(1)}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-3">
                  <div
                    className="bg-gradient-to-r from-green-500 to-green-400 h-3 rounded-full transition-all duration-500"
                    style={{ width: `${forPercentage}%` }}
                  ></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-red-400 font-medium flex items-center space-x-2">
                    <ThumbsDown className="h-4 w-4" />
                    <span>Against ({proposal.votesAgainst} votes)</span>
                  </span>
                  <span className="text-red-400 font-semibold">{againstPercentage.toFixed(1)}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-3">
                  <div
                    className="bg-gradient-to-r from-red-500 to-red-400 h-3 rounded-full transition-all duration-500"
                    style={{ width: `${againstPercentage}%` }}
                  ></div>
                </div>
              </div>
            </div>

            {/* Vote Summary */}
            <div className="text-center mb-6">
              <p className="text-2xl font-bold text-white mb-2">
                {proposal.votesFor} For / {proposal.votesAgainst} Against
              </p>
              <p className="text-gray-400">Total Votes: {proposal.totalVotes}</p>
            </div>

            {/* Voting Buttons */}
            {proposal.status === 'Active' && (
              <div className="flex flex-col sm:flex-row gap-4">
                {hasAlreadyVoted ? (
                  <div className="text-center p-4 bg-green-500/20 rounded-lg border border-green-500/30">
                    <Vote className="h-6 w-6 text-green-400 mx-auto mb-2" />
                    <p className="text-green-400 font-medium">You have voted on this proposal</p>
                  </div>
                ) : isConnected ? (
                  <>
                    <button
                      onClick={() => handleVote(true)}
                      className="flex-1 bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-200 shadow-lg hover:shadow-green-500/25 flex items-center justify-center space-x-2"
                    >
                      <ThumbsUp className="h-5 w-5" />
                      <span>Vote For</span>
                    </button>
                    <button
                      onClick={() => handleVote(false)}
                      className="flex-1 bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-200 shadow-lg hover:shadow-red-500/25 flex items-center justify-center space-x-2"
                    >
                      <ThumbsDown className="h-5 w-5" />
                      <span>Vote Against</span>
                    </button>
                  </>
                ) : (
                  <div className="text-center p-4 bg-accent-purple/20 rounded-lg border border-accent-purple/30">
                    <p className="text-gray-400 mb-2">Connect your wallet to vote</p>
                    <p className="text-accent-purple text-sm">Only scroll holders can participate in governance</p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Discussion Section */}
        <div className="bg-surface rounded-2xl p-8 shadow-2xl">
          <div className="flex items-center space-x-3 mb-6">
            <MessageSquare className="h-6 w-6 text-accent-purple" />
            <h2 className="text-xl font-semibold text-white">Discussion</h2>
          </div>
          <div className="text-center py-12">
            <MessageSquare className="h-16 w-16 text-gray-500 mx-auto mb-4" />
            <p className="text-gray-400 mb-2">Discussion feature coming soon</p>
            <p className="text-gray-500 text-sm">Community members will be able to discuss proposals here</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProposalDetailPage;