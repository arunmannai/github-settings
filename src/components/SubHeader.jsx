import { Link } from "react-router-dom";

const SubHeader = () => {
  return (
    <div className="container table-responsive mt-3 mb-2">
      <table className="table table-borderless m-0">
        <tbody>
          <tr>
            <td className="subheader-logo text-center px-0">
              <img
                src="/assets/subhead1.png"
                alt="subhead1"
                className="rounded-pill"
              />
            </td>
            <td className="px-0">
              <span className="p-0 subheader-name">Peter Griffin</span>
              <br />
              <span className="p-0 subheader-ypa">Your personal account</span>
            </td>
            <td className="text-end px-0">
              <button className="btn btn-secondary btn-custom">
                Go to your personal profile
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default SubHeader;
