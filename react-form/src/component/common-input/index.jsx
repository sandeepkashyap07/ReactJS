function CommonInput({ label,onchange,name,id,value,placeholder,type }) {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input
         className="border-4 outline-black"
        type={type || "text"}
        name={name}
        id={id}
        placeholder={placeholder || "enter value here"}
        value={value}
        onChange={onchange}
      />
    </div>
  );
}

export default CommonInput;
