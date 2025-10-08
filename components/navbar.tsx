import React from 'react'

export const Navbar = () => {
    const links = [
        {
            title : "Founders",
            href : "/founders"
        },
        {
            title : "Pricing",
            href : "/pricing"
        },
        {
            title : "Guide",
            href : "/guide"
        },
        {
            title : "Login",
            href : "/login"
        }
    ]
  return (

    <div className='navbar-root'>
        <div className='logo'>Funta</div>
        <div className='links'>
            {links.map((link, idx) => (<a className='link-items' key={link.title} href={link.href} >{link.title}</a> ))}
        </div>
        <div>
            <button className='btn' >Get Started</button>
        </div>
    </div>
  )
}
