const fetchPoems = async (queryParameter, sortOrder, fetchAmount) => {
  //queryParameter => "number_of_likes", "date_created"...
  //sortOrder => "desc", "asc"
  //fetchAmount => how much items to fetch 10, 20...
  try {
    const response = await fetch(
      `https://67befe3fb2320ee050123a7f.mockapi.io/api/poems?sortBy=${queryParameter}&order=${sortOrder}&limit=${fetchAmount}`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch poems data");
    }
    const data = await response.json();
    const slicedData = data.slice(0, fetchAmount);
    console.log("data: ", slicedData);
  } catch (err) {
    console.error(err);
    throw new Error("Unable to load poems data.");
  }
};

const fetchUserPoems = async (authorId) => {
  try {
    const response = await fetch(
      `https://67befe3fb2320ee050123a7f.mockapi.io/api/poems?author_id=${authorId}`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch poems data");
    }
    const data = await response.json();
    console.log("data: ", data);
  } catch (err) {
    console.error(err);
    throw new Error("Unable to load poems data.");
  }
};

const fetchUserProfileData = async (username) => {
  try {
    const response = await fetch(
      `https://67befe3fb2320ee050123a7f.mockapi.io/api/poets`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch users data");
    }
    const data = await response.json();
    const user = data.filter((user) => user.username === username);
    console.log("user: ", user);
  } catch (err) {
    console.error(err);
    throw new Error("Unable to load user data.");
  }
};

const changeUsername = async (userId, newUsername) => {
  try {
    const response = await fetch(
      `https://67befe3fb2320ee050123a7f.mockapi.io/api/poets/${userId}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username: newUsername }),
      }
    );

    if (!response.ok) {
      throw new Error("Failed to update username");
    }

    const updatedUser = await response.json();
    console.log("Updated user: ", updatedUser);
  } catch (err) {
    console.error(err);
    throw new Error("Unable to update username.");
  }
};

export { fetchPoems, fetchUserPoems, fetchUserProfileData, changeUsername };
