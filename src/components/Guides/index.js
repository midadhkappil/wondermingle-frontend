import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { getPostsOfFollowing } from "actions/postAction";
import { clearErrors, getGuides, loadUser } from "actions/userAction";
import { POST_FOLLOWING_RESET } from "constants/postConstants";
import { FOLLOW_USER_RESET } from "constants/userConstants";
import { BASE_PROFILE_IMAGE_URL } from "utils/constants";
import SkeletonUserItem from "components/Layouts/SkeletonUserItem";
import UserListItem from "components/Home/Sidebar/UserListItem";

const Guides = () => {
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.user);

  const { error, users, loading } = useSelector((state) => state.allUsers);
  const {
    error: followError,
    success,
    message,
  } = useSelector((state) => state.followUser);

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }
    dispatch(getGuides());
  }, [dispatch, error]);

  useEffect(() => {
    if (followError) {
      toast.error(followError);
      dispatch(clearErrors());
    }
    if (success) {
      toast.success(message);
      // dispatch({ type: POST_FOLLOWING_RESET });
      // dispatch(getPostsOfFollowing());
      dispatch({ type: FOLLOW_USER_RESET });
    }
  }, [success, followError]);

  return (
    <div className="lg:flex flex-col flex-auto m-8 mt-12 pr-8 -z-1">
      <div className="ml-10 flex flex-col p-2">
        <div className="flex justify-between items-center mt-5">
          <p className="font-semibold text-gray-500 text-sm">Guides For You</p>
          <span className="text-black text-xs font-semibold cursor-pointer">
            See All
          </span>
        </div>

        {/* <!-- suggested profile lists --> */}
        <div className="flex flex-col flex-auto mt-3 space-y-3.5">
          {loading
            ? Array(5)
                .fill("")
                .map((el, i) => <SkeletonUserItem key={i} />)
            : users?.map((user) => <UserListItem {...user} key={user._id} />)}
        </div>

        {/* <!-- sidebar footer container--> */}
        <div className="flex flex-col mt-8 space-y-6 text-xs text-gray-400">
          <div className="flex flex-col">
            <div className="flex items-center space-x-1.5">
              {[
                "About",
                "Help",
                "Press",
                "API",
                "Jobs",
                "Privacy",
                "Terms",
                "Locations",
              ].map((el, i) => (
                <a href="#" key={i}>
                  {el}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Guides;
