import { useFormStatus } from "react-dom";

const SubmitButton = ({ children }) => {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="btn-primary w-full mt-4 bg-indigo-600 hover:bg-indigo-800"
    >
      {pending ? "Submitting..." : children}
    </button>
  );
};
export default SubmitButton;
