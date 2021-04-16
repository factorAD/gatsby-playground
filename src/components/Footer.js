import React from "react"
import { Link } from "gatsby"

const Footer = () => {
  return (
    <footer className="page-footer">
      <p>
        &copy; {new Date().getFullYear()}{" "}
        <span>
          <Link to="/">SimplyRecipes</Link>
        </span>
        . Built with <a href="https://www.gatsbyjs.com/">Gatsby</a>
      </p>
    </footer>
  )
}

export default Footer