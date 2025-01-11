import CommonInputP from "../../component/common-input";

const formType = {
    INPUT : "input",
    SELECT : "select",
    TEXTAREA:"textarea"
};

function CommonFormP({formControls = [],formData,setFormData,buttonText,onHandleSubmit}){

function renderFormElements(getCurrentElement){
    let content = null;
    switch (getCurrentElement?.componentType) {
        case formType.INPUT:
            content=(
                <CommonInputP
                label={getCurrentElement.label}
                name={getCurrentElement.name}
                id={getCurrentElement.id}
                placeholder={getCurrentElement.placeholder}
                value={formData[getCurrentElement.name]}
                type={getCurrentElement.type}
                onchange={(event)=>
                    setFormData({
                        ...formData,
                        [event.target.name] : event.target.value
                    })}
                
                />
            )
            break;
    
            default:
                content = (
                    <CommonInput
                    type={getCurrentElement.type}
                      label={getCurrentElement.label}
                      name={getCurrentElement.name}
                      id={getCurrentElement.id}
                      placeholder={getCurrentElement.placeholder}
                      value={formData[getCurrentElement.name]}
                      onchange={(event)=>
                          setFormData({
                              ...formData,
                              [event.target.name] : event.target.value
                          })}
                    />
                  );
                break;
    }
}


    return(
      <form action="">
    {formControls?.length
    ? formControls.map((singleFormElementsItem) =>
        <div key={singleFormElementsItem.id}>
            {renderFormElement(singleFormElementsItem)}
        </div>
    ):null
    }


    <div>
        <button>{buttonText || "submit"}</button>
    </div>





      </form>

    )
}
export default CommonFormP