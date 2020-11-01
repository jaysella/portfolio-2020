import { useState } from "react";
import Img from "gatsby-image"

import { Lightbox } from "react-modal-image"
import useGallery from "../hooks/useGallery"

import styles from "./gallery.module.sass"

function Gallery(props) {
  const images = useGallery()
  const [showImageIndex, setShowImageIndex] = useState(undefined)

  return (
    <div>
      <div
        className={[
          styles.grid,
          props.autoHeight ? styles.autoHeight : "",
          props.maxThreeCols ? styles.maxThreeCols : "",
        ].join(" ")}
      >
        {images
          .sort((a, b) =>
            props.sort === "ASC"
              ? a.name < b.name
                ? 1
                : -1
              : a.name > b.name
              ? 1
              : -1
          )
          .map((image, index) => (
            <>
              {(!!props.filter ? image.name.includes(props.filter) : true) && (
                <div
                  className={styles.tile}
                  key={image.id + index}
                  attrib={index}
                  role="button"
                  tabIndex={0}
                  onClick={() => {
                    setShowImageIndex(index)
                  }}
                  onKeyDown={() => {
                    setShowImageIndex(index)
                  }}
                >
                  <Img
                    alt={image.name}
                    fluid={image.fluid}
                    className={styles.image}
                  />
                </div>
              )}
            </>
          ))}
      </div>

      {showImageIndex !== undefined && (
        <Lightbox
          hideDownload={true}
          large={images[showImageIndex].publicURL}
          onClose={() => {
            setShowImageIndex(undefined)
          }}
        />
      )}
    </div>
  )
}

export default Gallery
