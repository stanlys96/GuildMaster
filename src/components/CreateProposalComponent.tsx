import { Field, FieldArray, Form, Formik } from "formik";
import { Plus, RocketIcon } from "lucide-react";

interface Props {
  loading: boolean;
}

export const CreateProposalComponent = ({ loading }: Props) => {
  const today = new Date().toISOString().split("T")[0];

  return (
    <div className="flex flex-col gap-y-4 max-h-[85vh] overflow-scroll">
      <p className="font-bold text-[23px]">Create a new proposal</p>
      <div className="flex flex-col gap-y-4">
        <Formik
          initialValues={{
            name: "",
            description: "",
            link: "",
            typeOfVote: "Single choice vote",
            startDate: "",
            startTime: "",
            endDate: "",
            endTime: "",
            options: ["", ""],
          }}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {({ values, setFieldValue }) => (
            <Form className="flex flex-col gap-y-4">
              <div>
                <label htmlFor="name" className="block mb-1 text-white text-md">
                  Name
                </label>
                <Field
                  as="input"
                  id="name"
                  name="name"
                  placeholder="Enter proposal name"
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
                <Field
                  as="textarea"
                  id="description"
                  name="description"
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
                <label htmlFor="link" className="block mb-1 text-white text-md">
                  Add a Link (optional)
                </label>
                <Field
                  id="link"
                  name="link"
                  as="input"
                  placeholder="Enter link URL"
                  className={`w-full text-white shadow-sm focus-visible:outline-none rounded p-3 text-sm ${
                    loading
                      ? "dark:bg-zinc-700 bg-zinc-100 cursor-not-allowed"
                      : "dark:bg-zinc-800 bg-[#2D2F33]"
                  }`}
                  disabled={loading}
                />
              </div>
              <div>
                <label
                  htmlFor="typeOfVote"
                  className="block mb-1 text-white text-md"
                >
                  Type of vote
                </label>
                <Field
                  as="input"
                  id="typeOfVote"
                  name="typeOfVote"
                  type="text"
                  placeholder="Enter vote type"
                  className={`w-full text-white shadow-sm focus-visible:outline-none rounded p-3 text-sm ${
                    loading
                      ? "dark:bg-zinc-700 bg-zinc-100 cursor-not-allowed"
                      : "dark:bg-zinc-800 bg-[#2D2F33]"
                  }`}
                  disabled
                />
              </div>
              <div>
                <label
                  htmlFor="startDate"
                  className="block mb-1 text-white text-md"
                >
                  Start Date
                </label>
                <div className="flex flex-row gap-x-2 items-center">
                  <input
                    name="startDate"
                    min={today}
                    value={values.startDate}
                    type="date"
                    onChange={(e) => setFieldValue("startDate", e.target.value)}
                    id="startDate"
                    className="rounded-lg border bg-[#2D2F33] text-white border-none px-3 py-2"
                  />
                  <input
                    type="time"
                    id="startTime"
                    name="startTime"
                    value={values.startTime}
                    onChange={(e) => setFieldValue("startTime", e.target.value)}
                    className="rounded-lg border bg-[#2D2F33] text-white border-none px-3 py-2"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="endDate"
                  className="block mb-1 text-white text-md"
                >
                  End Date
                </label>
                <div className="flex flex-row gap-x-2 items-center">
                  <input
                    min={today}
                    type="date"
                    id="endDate"
                    name="endDate"
                    value={values.endDate}
                    onChange={(e) => setFieldValue("endDate", e.target.value)}
                    className="rounded-lg border bg-[#2D2F33] text-white border-none px-3 py-2"
                  />
                  <input
                    type="time"
                    id="endTime"
                    name="endTime"
                    value={values.endTime}
                    onChange={(e) => setFieldValue("endTime", e.target.value)}
                    className="rounded-lg border bg-[#2D2F33] text-white border-none px-3 py-2"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="name" className="block mb-4 text-white text-md">
                  Options (minimum 2)
                </label>
                <FieldArray name="options">
                  {({ push, remove }) => (
                    <div>
                      {values.options.map((option, index) => (
                        <div key={index} className="mb-4">
                          <label
                            htmlFor={`options[${index}]`}
                            className="block mb-1 text-white text-md"
                          >
                            Option #1
                          </label>
                          <Field
                            id={`options[${index}]`}
                            name={`options[${index}]`}
                            as="input"
                            placeholder="Enter guild name"
                            className={`w-full text-white shadow-sm focus-visible:outline-none rounded p-3 text-sm ${
                              loading
                                ? "dark:bg-zinc-700 bg-zinc-100 cursor-not-allowed"
                                : "dark:bg-zinc-800 bg-[#2D2F33]"
                            }`}
                            disabled={loading}
                          />
                        </div>
                      ))}
                    </div>
                  )}
                </FieldArray>
              </div>
              <div className="dotted border border-[#88888850] border-dotted px-5 py-3 cursor-pointer rounded-lg">
                <p className="flex flex-row gap-x-1 items-center justify-center w-full">
                  <Plus /> Add Choice
                </p>
              </div>
              <div className="flex gap-x-2 items-center mt-4">
                <button
                  type="button"
                  className="w-full bg-[#888888] focus-visible:outline-none px-4 py-2 text-base rounded-lg items-center justify-center gap-2 font-medium transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-opacity-30 active:scale-98"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-gradient-to-r flex items-center gap-x-1 justify-center w-full px-4 py-2 rounded-lg from-indigo-500 via-purple-500 to-pink-500 hover:from-indigo-600 hover:via-purple-600 hover:to-pink-600"
                >
                  <span className="flex items-center gap-x-1 justify-center">
                    <span>Create</span> <RocketIcon />
                  </span>
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};
