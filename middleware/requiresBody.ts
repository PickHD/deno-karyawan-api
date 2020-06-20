import { RouterMiddleware, Status } from "https://deno.land/x/oak/mod.ts";

const requiresBody: RouterMiddleware = async (context, next) => {
  if (!context.request.hasBody) {
    context.throw(Status.BadRequest, "Request Body is Required.");
  }
  const body = await context.request.body();
  if (body.type !== "json") {
    context.throw(Status.UnsupportedMediaType, "Content type must be JSON");
  }
  if (Object.keys(body.value).length === 0) {
    context.throw(Status.BadRequest, "Request body should not to be empty");
  }
  const { fullName, position, jobLocationArea, age, email, phone } = body.value;
  if (!fullName || !position || !jobLocationArea || !age || !email || !phone) {
    context.throw(
      Status.BadRequest,
      "Incorrect employees data. All fields Required"
    );
  }

  await next();
};

export default requiresBody;
