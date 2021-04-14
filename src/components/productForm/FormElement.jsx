export default function FormElement({
  name,
  id,
  value,
  onChange,
  type = "text",
  tag = "input",
  error,
}) {
  const CustomTag = `${tag}`;
  return (
    <div className="form-group mt-3">
      <label htmlFor={id}>{name}</label>
      <CustomTag
        type={type}
        className={`form-control ${error && "is-invalid"} `}
        id={id}
        value={value}
        onChange={onChange}
      />
      <div className="invalid-feedback">{error}</div>
    </div>
  );
}
