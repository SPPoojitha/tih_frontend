import React, { useEffect } from "react";
import {
  Link,
  defer,
  json,
  useLoaderData,
  useNavigation,
} from "react-router-dom";
import config from "../../components/util/config";
import { getAuthToken } from "../../components/util/auth";
import Loader from "../../components/Layout/Loader";

function BlogDetailPage() {
  const { blog } = useLoaderData();

  const { state } = useNavigation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (state === "loading") {
    return <Loader />;
  }

  const dateObj = new Date(blog.created_at);

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const day = dateObj.getDate();
  const monthIndex = dateObj.getMonth();
  const year = dateObj.getFullYear();

  const formattedDate = `${day} ${months[monthIndex]} ${year}`;

  return (
    <main className="bg-grey pb-30">
      <div className="container single-content">
        <div className="entry-header pt-80 pb-30 mb-20">
          <div className="row">
            <div className="col-md-6 mb-md-0 mb-sm-3">
              <figure className="mb-0 mt-lg-0 mt-3 border-radius-5">
                <img
                  className="border-radius-5"
                  src={blog.main_image}
                  alt="git"
                />
              </figure>
            </div>
            <div className="col-md-6 align-self-center">
              <div className="post-content">
                <div className="entry-meta meta-0 mb-15 font-small">
                  <a href="/">
                    <span className="post-cat position-relative text-info">
                      {blog.tags}
                    </span>
                  </a>
                </div>
                <h1 className="entry-title mb-30 font-weight-900">
                  {blog.title}
                </h1>
                <div className="entry-meta align-items-center meta-2 font-small color-muted">
                  <p className="mb-5">
                    <a className="author-avatar" href="/">
                      <img
                        className="img-circle"
                        src="/assets/imgs/authors/author.jpg"
                        alt=""
                      />
                    </a>
                    By{" "}
                    <a href="/">
                      <span className="author-name font-weight-bold">
                        {blog.user_username}
                      </span>
                    </a>
                  </p>
                  <span className="mr-10">{formattedDate}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <article className="entry-wraper mb-50">
          <div className="excerpt mb-30">
            <p>{blog.blog_text}</p>
          </div>

          <div className="entry-bottom mt-50 mb-30 wow fadeIn animated">
            <div className="tags">
              <span>Tags: </span>
              <Link href="/" rel="tag">
                {blog.tags}
              </Link>
            </div>
          </div>
          <div className="single-social-share clearfix wow fadeIn animated">
            <div className="entry-meta meta-1 font-small color-grey float-start mt-10">
              <span className="hit-count mr-15">
                <i className="elegant-icon icon_comment_alt mr-5"></i>
                {blog.comments.length} comments
              </span>
              <span className="hit-count mr-15">
                <i className="elegant-icon icon_like mr-5"></i>
                {blog.upvotes} Upvotes
              </span>
            </div>
          </div>

          <div className="related-posts pt-30">
            <div className="post-module-3">
              <div className="widget-header-2 position-relative mb-30">
                <h5 className="mt-5 mb-30">Related posts</h5>
              </div>
              <div className="loop-list loop-list-style-1">
                <article className="hover-up-2 transition-normal wow fadeInUp animated">
                  <div className="row mb-40 list-style-2">
                    <div className="col-md-4">
                      <div className="post-thumb position-relative border-radius-5">
                        <div
                          className="img-hover-slide border-radius-5 position-relative"
                          style={{
                            backgroundImage:
                              "url(/assets/imgs/tech/tech-featured-image.jpg)",
                          }}
                        >
                          <a className="img-link" href="single.html"></a>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-8 align-self-center">
                      <div className="post-content">
                        <div className="entry-meta meta-0 font-small mb-10">
                          <a href="category.html">
                            <span className="post-cat text-primary">Tech</span>
                          </a>
                        </div>
                        <h5 className="post-title font-weight-900 mb-20">
                          <a href="single.html">
                            Exploring Innovative Uses of Raspberry Pi in Modern
                            Technology
                          </a>
                        </h5>
                        <div className="entry-meta meta-1 float-start font-x-small text-uppercase">
                          <span className="post-on">15 October 2023</span>
                          <span className="time-reading has-dot">
                            5 mins read
                          </span>
                          <span className="post-by has-dot">200 views</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>

          <div className="single-more-articles border-radius-5">
            <div className="widget-header-2 position-relative mb-30">
              <h5 className="mt-5 mb-30">You might be interested in</h5>
              <button className="single-more-articles-close">
                <i className="elegant-icon icon_close"></i>
              </button>
            </div>
            <div className="post-block-list post-module-1 post-module-5">
              <ul className="list-post">
                <li className="mb-30">
                  <div className="d-flex hover-up-2 transition-normal">
                    <div className="post-thumb post-thumb-80 d-flex mr-15 border-radius-5 img-hover-scale overflow-hidden">
                      <a className="color-white" href="single.html">
                        <img src="/assets/imgs/tech/tech-thumb-1.jpg" alt="" />
                      </a>
                    </div>
                    <div className="post-content media-body">
                      <h6 className="post-title mb-15 text-limit-2-row font-medium">
                        <a href="single.html">
                          Emerging Technologies Shaping the Future of Software
                          Development
                        </a>
                      </h6>
                      <div className="entry-meta meta-1 float-start font-x-small text-uppercase">
                        <span className="post-on">15 March 2023</span>
                        <span className="post-by has-dot">800 views</span>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="mb-10">
                  <div className="d-flex hover-up-2 transition-normal">
                    <div className="post-thumb post-thumb-80 d-flex mr-15 border-radius-5 img-hover-scale overflow-hidden">
                      <a className="color-white" href="single.html">
                        <img src="/assets/imgs/tech/tech-thumb-2.jpg" alt="" />
                      </a>
                    </div>
                    <div className="post-content media-body">
                      <h6 className="post-title mb-15 text-limit-2-row font-medium">
                        <a href="single.html">
                          Exploring the Latest Innovations in Artificial
                          Intelligence
                        </a>
                      </h6>
                      <div className="entry-meta meta-1 float-start font-x-small text-uppercase">
                        <span className="post-on">10 September 2023</span>
                        <span className="post-by has-dot">250 views</span>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="comments-area">
            <div className="widget-header-2 position-relative mb-30">
              <h5 className="mt-5 mb-30">Comments</h5>
            </div>
            <div className="comment-list wow fadeIn animated">
              <div className="single-comment justify-content-between d-flex">
                <div className="user justify-content-between d-flex">
                  <div className="thumb">
                    <img src="/assets/imgs/authors/author.jpg" alt="" />
                  </div>
                  <div className="desc">
                    <p className="comment">
                      Mastering Git is like navigating a well-structured code
                      repository. The command branches and merges seamlessly,
                      much like the flow of a well-thought-out version control
                      system. Whether you're resolving conflicts or committing
                      changes, it's a journey through the landscape of
                      collaboration and efficient software development.
                    </p>
                    <div className="d-flex justify-content-between">
                      <div className="d-flex align-items-center">
                        <h5>
                          <a href="/">Shegu Poojitha</a>
                        </h5>
                        <p className="date">6 minutes ago</p>
                      </div>
                      <div className="reply-btn">
                        <div className="voting-icons mt-20 mb-20">
                          <button className="upvote-btn">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="bi bi-caret-up-square"
                              viewBox="0 0 16 16"
                            >
                              <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
                              <path d="M3.544 10.705A.5.5 0 0 0 4 11h8a.5.5 0 0 0 .374-.832l-4-4.5a.5.5 0 0 0-.748 0l-4 4.5a.5.5 0 0 0-.082.537z" />
                            </svg>
                          </button>
                          <span className="votes-count">12</span>
                          <button className="downvote-btn">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="bi bi-caret-down-square"
                              viewBox="0 0 16 16"
                            >
                              <path d="M3.626 6.832A.5.5 0 0 1 4 6h8a.5.5 0 0 1 .374.832l-4 4.5a.5.5 0 0 1-.748 0l-4-4.5z" />
                              <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1z" />
                            </svg>
                          </button>
                        </div>
                        <a href="/" className="btn-reply">
                          Reply
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="comment-list wow fadeIn animated">
              <div className="single-comment justify-content-between d-flex">
                <div className="user justify-content-between d-flex">
                  <div className="thumb">
                    <img src="/assets/imgs/authors/author.jpg" alt="" />
                  </div>
                  <div className="desc">
                    <p className="comment">
                      Exploring the branches of Git is like taking a stroll
                      through the commit history, each step revealing the
                      evolution of the codebase. Merge conflicts become the
                      crossroads where developers collaborate to ensure a smooth
                      journey through the repository.
                    </p>
                    <div className="d-flex justify-content-between">
                      <div className="d-flex align-items-center">
                        <h5>
                          <a href="/">Charan Srinivasan</a>
                        </h5>
                        <p className="date">December 4, 2023 at 3:12 pm</p>
                      </div>
                      <div className="reply-btn">
                        <div className="voting-icons mt-20 mb-20">
                          <button className="upvote-btn">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="bi bi-caret-up-square"
                              viewBox="0 0 16 16"
                            >
                              <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
                              <path d="M3.544 10.705A.5.5 0 0 0 4 11h8a.5.5 0 0 0 .374-.832l-4-4.5a.5.5 0 0 0-.748 0l-4 4.5a.5.5 0 0 0-.082.537z" />
                            </svg>
                          </button>
                          <span className="votes-count">12</span>
                          <button className="downvote-btn">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="bi bi-caret-down-square"
                              viewBox="0 0 16 16"
                            >
                              <path d="M3.626 6.832A.5.5 0 0 1 4 6h8a.5.5 0 0 1 .374.832l-4 4.5a.5.5 0 0 1-.748 0l-4-4.5z" />
                              <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1z" />
                            </svg>
                          </button>
                        </div>
                        <a href="/" className="btn-reply">
                          Reply
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="single-comment depth-2 justify-content-between d-flex mt-50">
                <div className="user justify-content-between d-flex">
                  <div className="thumb">
                    <img src="/assets/imgs/authors/author.jpg" alt="" />
                  </div>
                  <div className="desc">
                    <p className="comment">
                      In the world of Git mastery, each commit is a chapter in
                      the story of software development. Navigating through
                      branches is akin to flipping pages, revealing the
                      narrative of collaborative coding and version control.
                    </p>
                    <div className="d-flex justify-content-between">
                      <div className="d-flex align-items-center">
                        <h5>
                          <a href="/">Suresh Dangeti</a>
                        </h5>
                        <p className="date">December 4, 2023 at 3:12 pm</p>
                      </div>
                      <div className="reply-btn">
                        <div className="voting-icons mt-20 mb-20">
                          <button className="upvote-btn">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="bi bi-caret-up-square"
                              viewBox="0 0 16 16"
                            >
                              <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
                              <path d="M3.544 10.705A.5.5 0 0 0 4 11h8a.5.5 0 0 0 .374-.832l-4-4.5a.5.5 0 0 0-.748 0l-4 4.5a.5.5 0 0 0-.082.537z" />
                            </svg>
                          </button>
                          <span className="votes-count">12</span>
                          <button className="downvote-btn">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="bi bi-caret-down-square"
                              viewBox="0 0 16 16"
                            >
                              <path d="M3.626 6.832A.5.5 0 0 1 4 6h8a.5.5 0 0 1 .374.832l-4 4.5a.5.5 0 0 1-.748 0l-4-4.5z" />
                              <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1z" />
                            </svg>
                          </button>
                        </div>
                        <a href="/" className="btn-reply">
                          Reply
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="comment-list wow fadeIn animated">
              <div className="single-comment justify-content-between d-flex">
                <div className="user justify-content-between d-flex">
                  <div className="thumb">
                    <img src="/assets/imgs/authors/author.jpg" alt="" />
                  </div>
                  <div className="desc">
                    <p className="comment">
                      In the world of Git mastery, each commit is a chapter in
                      the story of software development. Navigating through
                      branches is akin to flipping pages, revealing the
                      narrative of collaborative coding and version control.
                    </p>
                    <div className="d-flex justify-content-between">
                      <div className="d-flex align-items-center">
                        <h5>
                          <a href="/">Lalit Suresh</a>
                        </h5>
                        <p className="date">December 4, 2023 at 3:12 pm</p>
                      </div>
                      <div className="reply-btn">
                        <div className="voting-icons mt-20 mb-20">
                          <button className="upvote-btn">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="bi bi-caret-up-square"
                              viewBox="0 0 16 16"
                            >
                              <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
                              <path d="M3.544 10.705A.5.5 0 0 0 4 11h8a.5.5 0 0 0 .374-.832l-4-4.5a.5.5 0 0 0-.748 0l-4 4.5a.5.5 0 0 0-.082.537z" />
                            </svg>
                          </button>
                          <span className="votes-count">12</span>
                          <button className="downvote-btn">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="bi bi-caret-down-square"
                              viewBox="0 0 16 16"
                            >
                              <path d="M3.626 6.832A.5.5 0 0 1 4 6h8a.5.5 0 0 1 .374.832l-4 4.5a.5.5 0 0 1-.748 0l-4-4.5z" />
                              <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1z" />
                            </svg>
                          </button>
                        </div>
                        <a href="/" className="btn-reply">
                          Reply
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="comment-form wow fadeIn animated">
            <div className="widget-header-2 position-relative mb-30">
              <h5 className="mt-5 mb-30">Leave a Reply</h5>
            </div>
            <form
              className="form-contact comment_form"
              action="#"
              id="commentForm"
            >
              <div className="row">
                <div className="col-12">
                  <div className="form-group">
                    <textarea
                      className="form-control w-100"
                      name="comment"
                      id="comment"
                      cols="30"
                      rows="9"
                      placeholder="Write Comment"
                    ></textarea>
                  </div>
                </div>
              </div>
              <div className="form-group">
                <button type="submit" className="btn button button-contactForm">
                  Post Comment
                </button>
              </div>
            </form>
          </div>
        </article>
      </div>
    </main>
  );
}

export default BlogDetailPage;

async function blogLoader(id) {
  const token = getAuthToken();

  try {
    const response = await fetch(
      `http://${config.backend_url}:8000/api/blog/${id}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (!response.ok) {
      throw json({ message: "Could not fetch blog by id." }, { status: 500 });
    } else {
      const resData = await response.json();
      return resData.data;
    }
  } catch (error) {
    return {
      message: `Hold up! Our server is on an unscheduled vacation 🏖️. 
        It's taking a break from your requests. Give it a moment to recharge its tropical vibes and try again later!`,
    };
  }
}

export async function loader({ params }) {
  const { blogId } = params;
  return defer({
    blog: await blogLoader(blogId),
  });
}
