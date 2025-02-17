import supabase from "./supabase";

async function insertingRow(obj, type) {
  const { data, error } = await supabase.from(type).insert(obj).select();

  if (error) return { data: null, error: error };

  return { data, error };
}

module.exports = insertingRow;
