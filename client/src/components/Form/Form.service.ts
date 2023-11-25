import {
  getControllerSignal,
  abortController,
  reinitController,
} from "../../services/abortController";

import { FetchContactProps } from "./Form.types";

export async function fetchContact({ email, number }: FetchContactProps) {
  try {
    abortController();
    reinitController();

    const searchParams = new URLSearchParams();
    searchParams.append("email", email);
    searchParams.append("number", number.replace(/-/g, ""));

    const response = await fetch(
      `http://localhost:5000/contacts?${searchParams.toString()}`,
      {
        method: "GET",
        signal: getControllerSignal(),
      }
    );

    const { status, data } = await response.json();


    if (status) {
      return data
    }

    // if (response.ok) {
    //   const responseData = await response.json();
    //   setUsers(responseData);
    //   reset();
    // } else {
    //   console.error("Request failed");
    //   setError("Request failed");
    //   setUsers(null);
    // }
  } catch (error) {
    // if (error instanceof Error) {
    //   if (error.name === "AbortError") {
    //     console.error("Request was aborted");
    //   } else {
    //     console.error("A network error occurred", error);
    //     throw error;
    //   }
    // } else {
    //   console.error("An error occurred", error);
    // }
  }
}
