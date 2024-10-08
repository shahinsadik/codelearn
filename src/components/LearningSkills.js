// components/LearningSkills.js

const LearningSkills = () => {
    return (
      <section className="flex px-20  flex-col items-center justify-center py-10">
        <div className="bg-white shadow-lg rounded-lg p-8">
          <h3 className="text-xl font-semibold mb-4">Describe Your Learning Skills</h3>
          <textarea
            rows="4"
            className="w-full border border-gray-300 rounded-lg p-2 mb-4"
            placeholder="Share your learning skills..."
          />
          <select className="w-full border border-gray-300 rounded-lg p-2 mb-4">
            <option>Select course</option>
            <option>Web Development</option>
            <option>Data Science</option>
            <option>Mobile Development</option>
          </select>
          <button className="bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-500">
            Get Started
          </button>
        </div>
      </section>
    );
  };
  
  export default LearningSkills;
  