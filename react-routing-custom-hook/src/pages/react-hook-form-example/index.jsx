import { useForm } from "react-hook-form";

function ReactHookFormExamplePage() {
  // the useform contain all the required method functions to create a form
  // here the error is nested property of formstate so we extract it like this
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  function onSubmitForm(FormData) {
    // the onsubmitform will provide the form data
    // here the register data will be consoled
    console.log(FormData);
    reset()
  }

  return (
    <div>
      <h1>React Hook Form</h1>

      {/* so here the handle submit will conatin the register value and pass it in the
onsubmitform */}
      <form onSubmit={handleSubmit(onSubmitForm)}>
        <div>
          <label>Email</label>
          {/* registering each input we can also put optional fields alos */}
          <input
            {...register("email", {
              required: true,
            })}
            className="border-2"
            name="email"
            type="email"
            placeholder="enter your email"
            />
            {/* to check errors */}
          {
              errors.email && errors.email.type === 'required'?
              <p className="text-red-700">Email is required</p> : null
          }
        </div>
        <div>
          <label htmlFor="">passwrod</label>
          <input
            {...register("password", {
              required: true,
              minLength: 8,
            })}
            className="border-2"
            name="password"
            type="password"
            placeholder="enter you password"
            />
            {
                errors.password && errors.password.type === 'required'?
                <p className="text-red-700">password is required</p> : null
            }
            {
                errors.password && errors.password.type === 'minLength'?
                <p className="text-red-700">password must be atleast 8 characters</p> : null
            }

        </div>
        <button
          className="border-4 border-black bg-cyan-700 text-white"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default ReactHookFormExamplePage;
