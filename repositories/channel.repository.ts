import Channel from "../db/models/channel.model";

export const create = async (channel: any) => {
  const { name, teamId, publicChannel } = channel;

  return await Channel.query().insert({
    name,
    teamId,
    public: publicChannel,
  });
};

export const findAll = async () => {
 return await Channel.query();
}