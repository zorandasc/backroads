import React from "react"
import Title from "../Title"
import styles from "../../css/contact.module.css"

const Contact = () => {
  return (
    <section className={styles.contact}>
      <Title title="contact" subtitle="us"></Title>
      <div className={styles.center}>
        <form
          action="https://formspree.io/zorandsc1@gmail.com"
          method="POST"
          className={styles.form}
        >
          <div>
            <label htmlFor="name">
              name
              <input
                type="text"
                name="name"
                id="name"
                className={styles.formControl}
                placeholder="Petar Petrovic"
              ></input>
            </label>
          </div>
          <div>
            <label htmlFor="email">
              email
              <input
                type="email"
                name="email"
                id="email"
                className={styles.formControl}
                placeholder="email@email.com"
              ></input>
            </label>
          </div>
          <div>
            <label htmlFor="message">
              message
              <textarea
                name="message"
                id="message"
                rows="10"
                className={styles.formControl}
                placeholder="Aloha"
              ></textarea>
            </label>
          </div>
          <div>
            <input
              type="submit"
              value="submit here"
              className={styles.submit}
            ></input>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact
