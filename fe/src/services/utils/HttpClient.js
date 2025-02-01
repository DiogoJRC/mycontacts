import delay from "../../utils/delay";
import APIError from "../../errors/APIError";

class HttpClient {
  constructor(baseURL) {
    this.baseURL = baseURL;
  }

  get(path, options) {
    return this.makeRequest(path, { method: "GET", headers: options?.headers });
  }

  post(path, options) {
    return this.makeRequest(path, {
      method: "POST",
      headers: options?.headers,
      body: options?.body,
    });
  }

  put(path, options) {
    return this.makeRequest(path, {
      method: "PUT",
      headers: options?.headers,
      body: options?.body,
    });
  }

  async makeRequest(path, options) {
    await delay(500);

    const headers = new Headers();

    if (options.body) {
      headers.append("Content-Type", "application/json");
    }

    if (options.headers) {
      // Duas formas de adicionar os headers enviados nas options à instância de Headers

      // Object.keys(options.headers).forEach((name) => {
      //   headers.append(name, options.headers[name]);
      // });

      Object.entries(options.headers).forEach(([name, value]) => {
        headers.append(name, value);
      });
    }

    const response = await fetch(`${this.baseURL}${path}`, {
      method: options.method,
      headers,
      body: JSON.stringify(options.body),
    });

    let responseBody = null;
    const contentType = response.headers.get("Content-Type");

    if (contentType.includes("application/json")) {
      responseBody = await response.json();
    }

    if (response.ok) {
      return responseBody;
    }

    throw new APIError(response, responseBody);
  }
}

export default HttpClient;
