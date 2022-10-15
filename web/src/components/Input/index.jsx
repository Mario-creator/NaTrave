export const Input = ({name, label, ...props }) => (
    <div className="flex flex-col">
        <label className="text-sm font-bold text-gray-500 mb-2" htmlFor={name}>{label}</label>
        <input className="p-3 border border-gray-700 rounded-xl focus:outline focus:outline-1 focus:outline-gray-700" {...props} name={name} id={name}/>
    </div>
)