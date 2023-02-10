import yqRequest from "..";

export function getEntireRoomList(offset, size) {
  return yqRequest.get({
    url: "/entire/list",
    params: {
      offset,
      size
    }
  })
}