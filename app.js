import { supabase } from "./supabase.js";

const daysDiv = document.getElementById("days");

async function loadDays() {
  const { data } = await supabase
    .from("graduation_days")
    .select("*")
    .order("date");

  daysDiv.innerHTML = "";

  data.forEach(day => {
    const div = document.createElement("div");
    div.className = "day" + (day.is_erased ? " erased" : "");
    div.innerText = new Date(day.date).toDateString();

    div.onclick = async () => {
      await supabase
        .from("graduation_days")
        .update({ is_erased: !day.is_erased })
        .eq("id", day.id);
    };

    daysDiv.appendChild(div);
  });
}

// Listen for real-time changes
supabase
  .channel("grad-sync")
  .on(
    "postgres_changes",
    { event: "*", schema: "public", table: "graduation_days" },
    () => loadDays()
  )
  .subscribe();

loadDays();
