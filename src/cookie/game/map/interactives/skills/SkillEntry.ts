import InteractiveElementSkill from "@/protocol/network/types/InteractiveElementSkill";

export default class SkillEntry {
  public id: number;
  public instanceUid: number;
  public name: string;
  public parentJobId: number;

  constructor(skill: InteractiveElementSkill) {
    this.id = skill.skillId;
    this.instanceUid = skill.skillInstanceUid;
    this.name = skill._name;
    this.parentJobId = skill._parentJobId;
  }
}
