function SettingsCheckbox({ name, title, summary }) {
  return (
    <div className="form-check">
      <input
        type="checkbox"
        className="form-check-input"
        name={name}
        defaultChecked
      />
      <div className="d-flex flex-column">
        <label className="form-check-label" htmlFor={title}>
          {title}
        </label>
        {summary && (
          <p
            className="description"
            dangerouslySetInnerHTML={{ __html: summary }}
          />
        )}
      </div>
    </div>
  );
}

export default SettingsCheckbox;
