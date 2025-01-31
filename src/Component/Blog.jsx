import React, { useState } from 'react';

const Blog = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);
  const [blogs, setBlogs] = useState([]);

  const handleImageChange = (event) => {
    setImage(URL.createObjectURL(event.target.files[0]));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (title && content) {
      const newBlog = { title, content, image };
      setBlogs([newBlog, ...blogs]);
      setTitle('');
      setContent('');
      setImage(null);
    }
  };

  return (
    <div className='w-full min-h-screen  bg-gradient-to-r from-blue-50 to-purple-200 p-6 flex'>
      {/* Left side: Blog Form */}
      <div className='w-1/3 p-4'>
        <h1 className='text-3xl font-bold mb-6'>Write Your Blog</h1>
        <form onSubmit={handleSubmit} className='bg-white p-6 rounded-lg shadow-md'>
          <input 
            type='text' 
            placeholder='Title' 
            className='w-full p-2 mb-4 border rounded' 
            value={title} 
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <textarea 
            placeholder='Write your blog content here...' 
            className='w-full p-2 mb-4 border rounded' 
            value={content} 
            onChange={(e) => setContent(e.target.value)}
            required
          ></textarea>
          <input type='file' accept='image/*' onChange={handleImageChange} className='mb-4'/>
          <button type='submit' className='w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-700'>
            Publish Blog
          </button>
        </form>
      </div>

      {/* Right side: Display Blogs */}
      <div className='w-2/3 p-4 flex flex-wrap gap-4'>
        {blogs.map((blog, index) => (
          <div key={index} className='bg-white p-4 rounded-lg shadow-md w-1/2'>
            <h2 className='text-2xl font-semibold'>{blog.title}</h2>
            <p className='mt-2'>{blog.content}</p>
            {blog.image && <img src={blog.image} alt='Blog' className='mt-4 w-full h-auto rounded' />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
