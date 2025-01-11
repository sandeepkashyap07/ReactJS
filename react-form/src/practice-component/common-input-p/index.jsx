function CommonInputP({label,onchange,name,id,value,placeholder, type}){
    return(

        <div>
            <label htmlFor={name}>{label}</label>
            <input 
            type={type || "text"}
            name={name} 
            id={id}
            placeholder={placeholder || "enter your value here"}
            value={value}
            onchange={onchange}
            />
        </div>
    )
}
export default CommonInputP;