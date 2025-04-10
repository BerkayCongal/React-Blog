import React from "react";
import { useParams } from "react-router-dom";
import "../styles/blogdetails.css";

const dummyData = [
  {
    id: 1,
    path: "/post/1",
    img: "/Rectangle 38 (1).jpg",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    userImg: "https://www.placehold.co/30x30",
    userName: "John Doe",
    date: "2025-04-08T10:00:00Z",
    generalDetails:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque viverra purus nec ligula tincidunt, sit amet fermentum erat convallis.",
  },
  {
    id: 2,
    path: "/post/2",
    img: "/Rectangle 38 (1).png",
    text: "Curabitur pretium tincidunt lacus. Nulla gravida orci a odio.",
    userImg: "https://www.placehold.co/30x30",
    userName: "Jane Smith",
    date: "2025-04-07T09:30:00Z",
    generalDetails:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel ligula id nisi vehicula cursus.",
  },
  {
    id: 3,
    path: "/post/3",
    img: "/Rectangle 38 (2).jpg",
    text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
    userImg: "https://www.placehold.co/30x30",
    userName: "Alice Brown",
    date: "2025-04-06T14:45:00Z",
    generalDetails:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices.",
  },
  {
    id: 4,
    path: "/post/4",
    img: "/Rectangle 38 (3).png",
    text: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet.",
    userImg: "https://www.placehold.co/30x30",
    userName: "Bob Johnson",
    date: "2025-04-05T16:20:00Z",
    generalDetails:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae sapien ut libero venenatis faucibus.",
  },
  {
    id: 5,
    path: "/post/5",
    img: "/Rectangle 38 (2).png",
    text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.",
    userImg: "https://www.placehold.co/30x30",
    userName: "Emily Davis",
    date: "2025-04-04T08:10:00Z",
    generalDetails:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris accumsan eros eget libero posuere vulputate.",
  },
  {
    id: 6,
    path: "/post/6",
    img: "/Rectangle 38 (2).png",
    text: "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse.",
    userImg: "https://www.placehold.co/30x30",
    userName: "Michael Wilson",
    date: "2025-04-03T12:00:00Z",
    generalDetails:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Curabitur ac lacus arcu.",
  },
  {
    id: 7,
    path: "/post/7",
    img: "/Rectangle 38 (3).png",
    text: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur.",
    userImg: "https://www.placehold.co/30x30",
    userName: "Sarah Lee",
    date: "2025-04-02T17:35:00Z",
    generalDetails:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit.",
  },
  {
    id: 8,
    path: "/post/8",
    img: "/Rectangle 38 (4).png",
    text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    userImg: "https://www.placehold.co/30x30",
    userName: "David Miller",
    date: "2025-04-01T11:25:00Z",
    generalDetails:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
  },
  {
    id: 9,
    path: "/post/9",
    img: "/Rectangle 38 (5).png",
    text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    userImg: "https://www.placehold.co/30x30",
    userName: "Jessica Taylor",
    date: "2025-03-31T19:40:00Z",
    generalDetails:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

const BlogDetails = () => {
  const { id } = useParams();
  const post = dummyData.find((item) => item.id.toString() === id);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="blog-details-container">
      <div className="main">
        <h2>{post.text}</h2>
        <div className="user-info">
          <div>
            <div className="username">{post.userName}</div>
            <div className="post-date">
              {new Date(post.date).toLocaleString()}
            </div>
          </div>
        </div>

        <div className="post-image">
          <img src={post.img} alt="Post" />
        </div>

        <div className="general-details">
          <h3>Genel Detaylar</h3>
          <p>{post.generalDetails}</p>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
