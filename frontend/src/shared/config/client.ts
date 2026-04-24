import axios from "axios";
import { ip } from "./ip";

export const client = axios.create({
    baseURL: `${ip}`,
    withCredentials: true,
});