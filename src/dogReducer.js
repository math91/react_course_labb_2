export default function dogReducer(state, action) {
  switch (action.type) {
    case "remove":
      return [];
    case "add":
      return [...state, action.dog]
    default:
    throw new Error("No action" + action.type)
  }
}
