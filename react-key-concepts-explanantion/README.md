# React + Vite
-- the .jsx is a file extension file to create a react file

-- the .jsx extension is in between of html and javascript a javascript file in whic we can write html also

-- what ever code we write in the jsx file it will 
convert that code into plain javascript and server it to web browser

-- so here we have used key prop because key prop 
    helps react to uniquely identify each lists value
    so that it can keep track and upadte it 
    beacuse in list multiple value with same tag
    is mapped so we need to unqiuely identify each list
    while rendering thats why we use key prop 

-- props -> a way to pass data from one compoenent to other compoenent
  props create a communication between two 
components like sending values to other component 
just like function parameter

-- usestate hook -> usestate hook is used to manage the state and component


usecontext hook -> usecontext stores all the values of the child state in  global state created by usecontext so that whenever a state needs a value of another state it dosent required to prop drilling simply the value be provided by the use context 

the child component is wrapped by gloabal context which is wraooed by the root component

child component(values) -> globalstate -> (provider to child)- > child component -> root app component which isd wrapped by the global state

createContext is used to create the context and the usecontext is used to consume the create context values


useReducer --> usereducer another type of state management hook 
it will take a state and a dispatch method to dispatch a particular action based on the action we are dispatching we will have reducer and this reducer will recieve an state and action  and based on that action it will return a certain type of state
syntax: - const[state,dispatch] = useReducer(reducer,initalArg,init)