import { DatePicker } from "antd";

const { RangePicker } = DatePicker;

interface Props {
  createFormik: any;
  loading: boolean;
}

export const CreateProposalComponent = ({ createFormik, loading }: Props) => {
  const today = new Date().toISOString().split("T")[0];
  return (
    <div className="flex flex-col gap-y-4 max-h-[85vh] overflow-scroll">
      <p className="font-bold text-[23px]">Create a new proposal</p>
      <div className="flex flex-col gap-y-4">
        <div>
          <label htmlFor="name" className="block mb-1 text-white text-md">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            onBlur={createFormik.handleBlur}
            value={createFormik.values.name}
            onChange={createFormik.handleChange}
            placeholder="Enter guild name"
            className={`w-full text-white shadow-sm focus-visible:outline-none rounded p-3 text-sm ${
              loading
                ? "dark:bg-zinc-700 bg-zinc-100 cursor-not-allowed"
                : "dark:bg-zinc-800 bg-[#2D2F33]"
            }`}
            disabled={loading}
          />
        </div>
        <div>
          <div className="flex flex-row justify-between items-center">
            <label
              htmlFor="description"
              className="block mb-1 text-white text-md"
            >
              Proposal Description
            </label>
            <label className="block mb-1 text-white text-md">
              (401 available characters)
            </label>
          </div>
          <textarea
            id="description"
            name="description"
            onBlur={createFormik.handleBlur}
            value={createFormik.values.name}
            onChange={createFormik.handleChange}
            placeholder="Enter proposal description"
            className={`w-full text-white shadow-sm focus-visible:outline-none rounded p-3 text-sm ${
              loading
                ? "dark:bg-zinc-700 bg-zinc-100 cursor-not-allowed"
                : "dark:bg-zinc-800 bg-[#2D2F33]"
            }`}
            disabled={loading}
            rows={4}
          />
        </div>
        <div>
          <label htmlFor="name" className="block mb-1 text-white text-md">
            Add a Link (optional)
          </label>
          <input
            id="name"
            name="name"
            type="text"
            onBlur={createFormik.handleBlur}
            value={createFormik.values.name}
            onChange={createFormik.handleChange}
            placeholder="Enter guild name"
            className={`w-full text-white shadow-sm focus-visible:outline-none rounded p-3 text-sm ${
              loading
                ? "dark:bg-zinc-700 bg-zinc-100 cursor-not-allowed"
                : "dark:bg-zinc-800 bg-[#2D2F33]"
            }`}
            disabled={loading}
          />
        </div>
        <div>
          <label htmlFor="name" className="block mb-1 text-white text-md">
            Start Date
          </label>
          <div className="flex flex-row gap-x-2 items-center">
            <input
              min={today}
              type="date"
              id="start-date"
              className="rounded-lg border bg-[#2D2F33] text-white border-none px-3 py-2"
            />
            <input
              type="time"
              id="start-time"
              className="rounded-lg border bg-[#2D2F33] text-white border-none px-3 py-2"
            />
          </div>
        </div>
        <div>
          <label htmlFor="name" className="block mb-1 text-white text-md">
            End Date
          </label>
          <div className="flex flex-row gap-x-2 items-center">
            <input
              min={today}
              type="date"
              id="end-date"
              className="rounded-lg border bg-[#2D2F33] text-white border-none px-3 py-2"
            />
            <input
              type="time"
              id="end-time"
              className="rounded-lg border bg-[#2D2F33] text-white border-none px-3 py-2"
            />
          </div>
        </div>
        <div>
          <label htmlFor="name" className="block mb-1 text-white text-md">
            Options (minimum 2)
          </label>
        </div>
      </div>
    </div>
  );
};
