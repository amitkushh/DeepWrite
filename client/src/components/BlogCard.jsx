import { useNavigate } from "react-router-dom";

function BlogCard({ blog }) {
  const { title, description, image, category, _id } = blog;
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/blog/${_id}`)}
      className="border border-[#bdbdbd] bg-[#f3f3f3] cursor-pointer transition hover:scale-105 focus:scale-105"
    >
      <div>
        <img src={image} alt={title} className="h-48 w-full object-cover" />
      </div>
      <div className="p-8">
        <span className="bg-white rounded-full p-2 border">{category}</span>
        <h3 className="text-md font-semibold my-3">{title}</h3>
        <p className="text-sm text-gray-700" dangerouslySetInnerHTML={{"__html": description.slice(0, 90)}}></p>
      </div>
    </div>
  );
}

export default BlogCard;
