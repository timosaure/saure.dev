
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

function SuccessMessage() {
  return (
    <div className="bg-primary text-white border border-solid border-green-900 rounded-2xl flex flex-col justify-center items-center h-24">
      <h3 className="font-bold text-lg">Ihre Nachricht wurde erfolgreich verschickt!</h3>
      <p className="">Ich werde mich sobald wie möglich zurückmelden.</p>
    </div>
  )
}

function FailureMessage() {
  return (
    <div className="bg-red-600 text-white border border-solid border-red-600 rounded-2xl flex flex-col justify-center items-center h-24">
      <h3 className="font-bold text-lg">Ihre Nachricht konnte nicht verschickt werden!</h3>
      <p className="">Bitte senden sie mir stattdessen eine Mail an <a className="text-blue-800 hover:underline" href="mailto:hallo@saure.dev">hallo@saure.dev</a>.</p>
    </div>
  )
}

enum SendStatus {
  NOT_SENT,
  SUCCESS,
  FAIL
}

function ContactForm(props: { name: string; successPath: string; }) {

  const [success, setSuccess] = useState(SendStatus.NOT_SENT);
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
      .then((r) => {
        if (!r.ok) {
          throw new Error("Failed to send message!" + r.status)
        }
        setSuccess(SendStatus.SUCCESS);
      })
      .catch((error) => {
        console.log(error)
        setSuccess(SendStatus.FAIL);
      });
  };

  switch (success) {
    case SendStatus.NOT_SENT:
    case SendStatus.FAIL:
      return (
        <form className="text-gray-700" name="contact" data-netlify="true" onSubmit={handleSubmit}>
          {success === SendStatus.FAIL ? <FailureMessage /> : <></>}
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
    case SendStatus.SUCCESS:
      return (<SuccessMessage />)
  }


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
