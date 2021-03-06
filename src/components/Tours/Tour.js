import React from "react"
import styles from "../../css/tour.module.css"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Image from "gatsby-image"
import { FaMap } from "react-icons/fa"

const Tour = ({ tour }) => {
  const { name, price, country, days, slug, images } = tour
  let mainImage = images[0].fluid

  return (
    <article className={styles.tour}>
      <div className={styles.imgContainer}>
        <Image fluid={mainImage} className={styles.img}></Image>
        <AniLink fade className={styles.link} to={`/tours/${slug}`}>
          details
        </AniLink>
      </div>
      <div className={styles.footer}>
        <h3>{name}</h3>
        <div className={styles.info}>
          <h4 className={styles.country}>
            <FaMap className={styles.icon}></FaMap>
            {country}
          </h4>
          <div className={styles.details}>
            <h5>{days} days</h5>
            <h5>from ${price}</h5>
          </div>
        </div>
      </div>
    </article>
  )
}

export default Tour
