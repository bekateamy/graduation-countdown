import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

export const supabase = createClient(
  "https://guwhsqbdtmpcmcjtqcyu.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd1d2hzcWJkdG1wY21janRxY3l1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njc2Mjc1NjQsImV4cCI6MjA4MzIwMzU2NH0.v3oXSaIyYk58LAm1tpQJ5r6agBDFliBo_FHcOSrKYrc"
);
