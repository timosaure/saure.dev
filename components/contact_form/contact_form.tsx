
import { IconDefinition, faEnvelope, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FormEvent, useState } from "react";

export default function ContactSection({ id }: { id: string }) {
  return (
    <section id={id} className="py-12 flex flex-col justify-center items-center">
      <div className="container">
        <div className="text-center text-4xl font-bold mt-6 mb-5">
          <h1 className="title">Kontakt</h1>
        </div>
        <ContactForm name="Home" successPath="/contact/success" />
      </div>
    </section>
  );
}

function ContactForm(props: { name: string; successPath: string; }) {

  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const data = new URLSearchParams()
    data.append("form-name", "contact")
    data.append("name", name)
    data.append("mail", mail)
    data.append("message", message)

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: data,
    })
      .then(() => alert("Thank you for your submission"))
      .catch((error) => alert(error));
  };

  return (
    <form className="text-gray-700" name="contact" data-netlify="true" onSubmit={handleSubmit}>
      <FormInput name="name" label="Name" type="text" icon={faUser} value={name} onChange={setName} />
      <FormInput name="mail" label="Email" type="email" icon={faEnvelope} value={mail} onChange={setMail} />
      <div className="mb-3">
        <label className="font-bold block mt-3 mb-2" htmlFor="message-input">
          Message
        </label>
        <div className="control">
          <textarea
            id="message-input"
            name="message"
            className="p-2 min-h-[12em] border border-gray-300 focus:border-blue-500 focus:ring-blue-500 rounded-lg w-full"
            placeholder="Textarea"
            value={message}
            onChange={e => setMessage(e.target.value)}
          ></textarea>
        </div>
      </div>
      <div>
        <button type="submit" className="bg-primary rounded-md text-white py-2 px-4">
          Senden
        </button>
      </div>
    </form>
  );
}

function FormInput({ name, type, label, icon, value, onChange }: { name: string, type: string, label: string, icon: IconDefinition, value: string, onChange: (s: string) => void }) {
  const id = name + "-input";
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
          value={value}
          onChange={(e) => onChange(e.target.value)} />
        <span className="pointer-events-none absolute top-0 left-0 z-10 text-gray-400 flex justify-center items-center h-full px-4">
          <FontAwesomeIcon icon={icon} />
        </span>
      </div>
    </div>
  );
}
