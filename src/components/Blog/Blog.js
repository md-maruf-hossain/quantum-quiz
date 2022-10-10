import React from "react";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2'



const Blog = () => {
    const notify = () => {
        Swal.fire(
            'New Blogs are coming soon!',
            '',
            'info'
          )
    };
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="mb-10 border-t border-b divide-y">
        <div className="grid py-8 sm:grid-cols-4">
          <div className="mb-4 sm:mb-0">
            <div className="space-y-1 text-xs font-semibold tracking-wide uppercase">
              <Link to="/blog" className="transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800" aria-label="Category">
                Blog
              </Link>
              <p className="text-gray-600">01 Oct 2022</p>
            </div>
          </div>
          <div className="sm:col-span-3 lg:col-span-2">
            <div className="mb-3">
              <Link to="/blog" aria-label="Article" className="inline-block text-black transition-colors duration-200 hover:text-deep-purple-accent-700">
                <p className="text-3xl font-extrabold leading-none sm:text-4xl xl:text-4xl">What is the purpose of React Router?</p>
              </Link>
            </div>
            <p className="text-gray-700">
              React Router enables "client side routing". In traditional websites, the browser requests a document from a web server, downloads and evaluates CSS and JavaScript assets, and renders the
              HTML sent from the server. When the user clicks a link, it starts the process all over again for a new page. Client side routing allows your app to update the URL from a link click
              without making another request for another document from the server. Instead, your app can immediately render some new UI and make data requests with fetch to update the page with new
              information. This enables faster user experiences because the browser doesn't need to request an entirely new document or re-evaluate CSS and JavaScript assets for the next page. It also
              enables more dynamic user experiences with things like animation.
            </p>
          </div>
        </div>
        <div className="grid py-8 sm:grid-cols-4">
          <div className="mb-4 sm:mb-0">
            <div className="space-y-1 text-xs font-semibold tracking-wide uppercase">
              <Link to="/blog" className="transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800" aria-label="Category">
                Blog
              </Link>
              <p className="text-gray-600">12 Nov 2022</p>
            </div>
          </div>
          <div className="sm:col-span-3 lg:col-span-2">
            <div className="mb-3">
              <Link to="/blog" aria-label="Article" className="inline-block text-black transition-colors duration-200 hover:text-deep-purple-accent-700">
                <p className="text-3xl font-extrabold leading-none sm:text-4xl xl:text-4xl">How does Context API works?</p>
              </Link>
            </div>
            <p className="text-gray-700">
              Context API provides a way to pass data through the component tree without having to pass props down manually at every level. In a typical React application, data is passed top-down
              (parent to child) via props, but such usage can be cumbersome for certain types of props (e.g. locale preference, UI theme) that are required by many components within an application.
              Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.
            </p>
          </div>
        </div>
        <div className="grid py-8 sm:grid-cols-4">
          <div className="mb-4 sm:mb-0">
            <div className="space-y-1 text-xs font-semibold tracking-wide uppercase">
              <Link to="/blog" className="transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800" aria-label="Category">
                blog
              </Link>
              <p className="text-gray-600">28 Dec 2022</p>
            </div>
          </div>
          <div className="sm:col-span-3 lg:col-span-2">
            <div className="mb-3">
              <Link to="/blog" aria-label="Article" className="inline-block text-black transition-colors duration-200 hover:text-deep-purple-accent-700">
                <p className="text-3xl font-extrabold leading-none sm:text-4xl xl:text-4xl">What is useRef() hook?</p>
              </Link>
            </div>
            <p className="text-gray-700">
              useRef returns a mutable ref object whose .current property is initialized to the passed argument (initialValue). The returned object will persist for the full lifetime of the component.
              Essentially, useRef is like a “box” that can hold a mutable value in its .current property. You might be familiar with refs primarily as a way to access the DOM. If you pass a ref object
              to React , React will set its .current property to the corresponding DOM node whenever that node changes. However, useRef() is useful for more than the ref attribute. It’s handy for
              keeping any mutable value around similar to how you’d use instance fields in classes. This works because useRef() creates a plain JavaScript object. The only difference between useRef()
              and creating a object yourself is that useRef will give you the same ref object on every render. Keep in mind that useRef doesn’t notify you when its content changes. Mutating the
              .current property doesn’t cause a re-render. If you want to run some code when React attaches or detaches a ref to a DOM node, you may want to use a callback ref instead.
            </p>
          </div>
        </div>
      </div>
      <div className="text-center">
        <button className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-orange-400" onClick={notify}>
          See all articles
          <svg className="inline-block w-3 ml-2" fill="currentColor" viewBox="0 0 12 12">
            <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Blog;
