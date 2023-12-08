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
      `${process.env.REACT_APP_API_URL}/contacts?${searchParams.toString()}`,
      {
        method: "GET",
        signal: getControllerSignal(),
      }
    );

    return await response.json();
  } catch (error) {
    console.log(error);
  }
}
