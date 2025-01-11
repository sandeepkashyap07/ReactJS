/*HERE  we are giving this commonform component some props whicch 
is initally empty  and on bases of the props
tyhat sended from the app.jsx it will create a form lieke if we want create a
form for register pagae we will send 3 props and when it comes here seeing three
props it will automatically generate the form */

import CommonInput from "../common-input";

const formTypes = {
  INPUT: "input",
  SELECT: "select",
  TEXTAREA: "textarea",
};

function CommonForm({ formControls = [], formData, setFormData,buttonText,onHandleSubmit }) {
  function renderFormElement(getCurrentElement) {
    let content = null;
    switch (getCurrentElement?.componentType) {
      case formTypes.INPUT:
        content = (
          <CommonInput
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
        );
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
    return content ;
  }

  return (
    <form onSubmit={onHandleSubmit}>
      {formControls?.length
        ? formControls.map( (singleFormElementsItem) => 
            <div key={singleFormElementsItem.id}>
        {renderFormElement(singleFormElementsItem)}
      </div>
                ) 
        : null}
        <div className="mt-3">
<button type="submit">{buttonText || "submit"}</button>
        </div>
    </form>
  );
}

export default CommonForm;
