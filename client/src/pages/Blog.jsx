import { useEffect, useState } from "react";
import blogdata from "../constants/BlogData";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Moment from "moment";
import commentdata from "../constants/CommentData";
import UserIcon from "../icons/UserIcon";
import XIcon from "../icons/XIcon";
import LinkedinIcon from "../icons/LinkedinIcon";
import FacebookIcon from "../icons/FacebookIcon";
import Loader from "../components/Loader";

function Blog() {
  const { id } = useParams();

  const [data, setData] = useState(null);
  const [comments, setComments] = useState([]);
  const [name, setName] = useState("");
  const [content, setContent] = useState("");

  const fetchBlogData = async () => {
    const data = blogdata.find((item) => item._id === id);
    setData(data);
  };

  const fetchComments = async () => {
    setComments(commentdata);
  };

  const addComment = async (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    fetchBlogData();
    fetchComments();
  }, []);

  return data ? (
    <div>
      <Navbar />
      {/* title section */}
      <div className="text-center mt-20 mb-18">
        <span className="py-4 font-medium">
          Published on {Moment(data.createdAt).format("MMMM Do YYYY")}
        </span>
        <h1 className="text-5xl font-semibold max-w-2xl mx-auto">
          {data.title}
        </h1>
        <h2 className="my-5 max-w-lg mx-auto">{data.subTitle}</h2>
        <span className="bg-black text-white py-3 px-4 rounded-full text-sm">
          Michael Brown
        </span>
      </div>

      {/* Thumbnail, post, comment and social section */}
      <div className="mx-5 max-w-5xl md:mx-auto my-10 mt-6">
        <img src={data.image} alt="data.title" className="mb-5 " />
        <div
          className="rich-text max-w-3xl mx-auto"
          dangerouslySetInnerHTML={{ __html: data.description }}
        ></div>

        {/* comment */}
        <div className="mt-15 mb-12 max-w-3xl mx-auto">
          <span className="font-semibold text-lg">
            Comments ({comments.length})
          </span>
          <div className="flex flex-col gap-4 mt-5">
            {comments.map((item, index) => (
              <div key={index} className="relative border max-w-xl p-4">
                <div className="flex flex-center gap-2 mb-2">
                  <UserIcon />
                  <p className="font-medium ">{item.name}</p>
                </div>

                <p className="text-sm max-w-md ml-8">{item.content}</p>
                <div className="absolute right-4 bottom-3 flex items-center gap-2 text-xs">
                  {Moment(item.createdAt).fromNow()}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Add comment section */}
        <div className="max-w-3xl mx-auto">
          <span className="font-semibold text-lg">Add your comment</span>
          <form
            onSubmit={addComment}
            className="flex flex-col items-start gap-4 max-w-lg mt-5"
          >
            <input
              onChange={(e) => setName(e.target.value)}
              value={name}
              type="text"
              placeholder="Name"
              required
              className="w-full outline-none border py-2 pl-4"
            />
            <textarea
              onChange={(e) => setContent(e.target.value)}
              value={content}
              placeholder="Comment"
              required
              className="w-full p-2 h-50 outline-none border"
            ></textarea>
            <button
              type="submit"
              className="bg-black text-white py-3 px-10 cursor-pointer"
            >
              Submit
            </button>
          </form>
        </div>

        {/* social media */}
        <div className="max-w-3xl mx-auto mt-15 flex flex-col gap-3">
          <span className="font-medium text-md">
            Share this article on social media
          </span>
          <div className="flex gap-3">
            <span className="rounded-full bg-black p-2">
              <XIcon />
            </span>
            <span className="rounded-full bg-black p-2">
              <LinkedinIcon />
            </span>
            <span className="rounded-full bg-black p-2">
              <FacebookIcon />
            </span>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  ) : (
    <Loader />
  );
}

export default Blog;
