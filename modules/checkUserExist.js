import supabase from "../services/supabase";

async function checkUserExist(email, password) {
  if (email && password) {
    const { data, error } = await supabase
      .from("users")
      .select("*")
      .eq("email", email)
      .eq("password", password);

    if (error) return { message: "user was not found" };

    return {
      data: data,
      message: "Logged in successfully",
    };
  }

  const { data, error } = await supabase
    .from("users")
    .select("*")
    .eq("email", email);

  if (error) return { message: "user was not found" };

  return {
    data: data,
    message: "User of same email already exists. Kindly, login.",
  };
}

module.exports = checkUserExist;
