// pages/courses.js
import Link from 'next/link';
import React from 'react';

const Courses = () => {
    const categories = [
        { name: 'Web Development', link: '/courses/web-development' },
        { name: 'Mobile Development', link: '/courses/mobile-development' },
        { name: 'Data Science', link: '/courses/data-science' },
        { name: 'Artificial Intelligence', link: '/courses/ai' },
    ];

    return (
        <div>
            <h2>Our Top Categories</h2>
            <div className="categories">
                {categories.map((category) => (
                    <div key={category.name} className="category">
                        <h3>{category.name}</h3>
                        <Link href={category.link}>View Courses</Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Courses;
