
import { IconDefinition, faEnvelope, faUser } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const ContactForm = (props: { name: string, successPath: string }) => {

  return (
    <form className="text-gray-700">
      <FormInput name="name" label="Name" type="text" icon={faUser} />
      <FormInput name="mail" label="Email" type="email" icon={faEnvelope} />
      <div className="mb-3">
        <label className="font-bold block mt-3 mb-2" htmlFor="message-input">
          Message
        </label>
        <div className="control">
          <textarea
            id="message-input"
            name="message"
            className="p-2 min-h-[8em] border border-gray-300 focus:border-blue-500 focus:ring-blue-500 rounded-lg w-full"
            placeholder="Textarea"
          ></textarea>
        </div>
      </div>
      <div>
        <button type="submit" className="bg-primary rounded-md text-white py-2 px-4">
          Senden
        </button>
      </div>
    </form>
  )
}

const FormInput = (props: { name: string, type: string, label: string, icon: IconDefinition }) => {
  const { name, type, label, icon } = props
  const id = name + "-input"
  return (
    <div className="">
      <label className="font-bold block mt-3 mb-2" htmlFor={id}>
        {label}
      </label>
      <div className="relative">
        <input
          name={name}
          id={id}
          type={type}
          className="pl-10 p-2 border border-gray-300 focus:border-blue-500 focus:ring-blue-500 rounded-lg w-full"
          placeholder={label}
        />
        <span className="pointer-events-none absolute top-0 left-0 z-10 text-gray-400 flex justify-center items-center h-full px-4">
          <FontAwesomeIcon icon={icon} />
        </span>
      </div>
    </div>
  )
}

export default ContactForm