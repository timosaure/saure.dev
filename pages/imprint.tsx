import { Inter } from '@next/font/google'



const inter = Inter({ subsets: ['latin'] })

export default function Index() {
  return (
    <section className="mx-auto mt-20 flex flex-col">
      <h1 className="text-4xl">Impressum</h1>

      <h2 className="text-2xl mb-6">Angaben gem&auml;&szlig; &sect; 5 TMG</h2>
      <p className="mb-6">Timo Saure<br />
        Hahnstr. 14<br />
        88677 Markdorf</p>

      <h2 className="text-2xl">Kontakt</h2>
      <p className="mb-6">Telefon: +49 (0) 172 13 44 208<br />
        E-Mail: <a className="text-blue-600 hover:underline" href="mailto:hallo@saure.dev">hallo@saure.dev</a></p>

      <p className="mb-6">Quelle: <a className="text-blue-600 hover:underline" href="https://www.e-recht24.de">eRecht24</a></p>
    </section>
  )
}
