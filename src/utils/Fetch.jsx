const filterPoems = async (likeSortOrder, categoryId, language, authorId) => {
  try {
    const baseUrl = "https://67befe3fb2320ee050123a7f.mockapi.io/api/poems";

    const queryParams = new URLSearchParams();
    if (likeSortOrder) queryParams.append("sortBy", "number_of_likes");
    if (likeSortOrder) queryParams.append("order", likeSortOrder);
    if (categoryId) queryParams.append("category_id", categoryId);
    if (language) queryParams.append("language", language);
    if (authorId) queryParams.append("author_id", authorId);

    const url = `${baseUrl}?${queryParams.toString()}`;

    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Failed to fetch poems data");
    }
    const data = await response.json();
    console.log("data: ", data);
    return data;
  } catch (err) {
    console.error(err);
    throw new Error("Unable to load poems data.");
  }
};

const fetchMostLikedPoems = async () => {
  try {
    const response = await fetch(
      `https://67befe3fb2320ee050123a7f.mockapi.io/api/poems?sortBy=number_of_likes&order=desc`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch poems data");
    }
    const data = await response.json();
    const slicedData = data.slice(0, 20);
    console.log("data: ", slicedData);
    return slicedData;
  } catch (err) {
    console.error(err);
    throw new Error("Unable to load poems data.");
  }
};

const fetchLatestPoems = async () => {
  try {
    const response = await fetch(
      `https://67befe3fb2320ee050123a7f.mockapi.io/api/poems?sortBy=date_created&order=desc`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch poems data");
    }
    const data = await response.json();
    const slicedData = data.slice(0, 20);
    console.log("data: ", slicedData);
    return slicedData;
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
    return data;
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
    const user = data.find((user) => user.username === username);
    console.log("user: ", user);
    return user;
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

const fetchCountries = async () => {
  try {
    const response = await fetch(
      `https://raw.githubusercontent.com/samayo/country-json/refs/heads/master/src/country-by-capital-city.json`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch countries");
    }

    const data = await response.json();
    const countries = data.map((item) => item.country);
    return countries;
  } catch (err) {
    console.error(err);
    throw new Error("Unable to fecth languages.");
  }
};

const fetchGenres = async () => {
  try {
    const response = await fetch(
      `https://raw.githubusercontent.com/samayo/country-json/refs/heads/master/src/country-by-capital-city.json`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch genres");
    }

    const data = await response.json();
    return data;
  } catch (err) {
    console.error(err);
    throw new Error("Unable to fecth genres.");
  }
};

export {
  filterPoems,
  fetchUserPoems,
  fetchUserProfileData,
  changeUsername,
  fetchMostLikedPoems,
  fetchLatestPoems,
  fetchCountries,
  fetchGenres,
};
