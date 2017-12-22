export class STRIKE{
  constructor(){
    this.num = null;
    this.stance= null;
    this.source= null;
    this.method= null;
    this.target= null;
    this.position=null;
    this.strategy=null;
    this.attempt= false;
    this.competency= null;
    this.optimal= false;
    this.critical= false;
    this.knock_down= false;
    this.illegal= null;
    this.time= null
  }
}

export class STRIKE_DEFENCE {
  constructor(){
    this.method= null;
    this.position=null;
    this.time= null;
  }
}

export class GRAPPLE {
  constructor(){
    this.takedown_attempt= null;
    this.success= false;
    this.slam= false;
    this.pass= false;
    this.reversal_or_sweep= false;
    this.submission_secured=null;
    this.technique=null;
    this.finish= false;
    this.time= null;
  }
}

export class GRAPPLE_DEFENCE {
  constructor(){
    this.guard= false;
    this.stand_up= false;
    this.time= null;
  }
}
// Fighter

export class FIGHTER {
  constructor(){
    this.id = '';
    this.name = '';
    this.gender = '';
    this.dob = '';
    this.country = '';
    this.height = '';
    this.weight = '';
    this.arm_reach = '';
    this.leg_reach = '';
  }
}

export class EVENT {
  constructor(){
    this.event_name = '';
    this.venue_name = '';
    this.date = '';
    this.result = '';
    this.round_ended = '';
    this.time_ended = '';
    this.method = '';
    this.technique = '';
    this.referee = '';
    this.wieght_class = '';
    this.opponent_name = '';
    this.championship = false;
  }
}

export class SHARED_EVENT {
  constructor(){
    this.event_name = '';
    this.venue_name = '';
    this.date = '';
    this.round_ended = '';
    this.time_ended = '';
    this.referee = '';
    this.wieght_class = '';
    this.championship = '';
  }
}

export const fighterGender = [
  {
    text: 'Male',
    value: 'male',
  },
  {
    text: 'Female',
    value: 'female',
  },
]

// Weight class

export const weightClass = [
  {
    text: 'Class A',
    value: 'class_a',
  },
  {
    text: 'Class B',
    value: 'class_b',
  },
  {
    text: 'Class C',
    value: 'class_c',
  }
]

//  Strike

export const stanceOptions = {
                          placeholder: '--Stance--',
                          name: 'stance',
                          options: [
                            {key:"southpaw", value:"southpaw", text:"1 - Southpaw"},
                            {key:"ortodox", value: "ortodox", text: "2 - Ortodox"}
                          ]
                        };
export const sourceOptions = {
                          placeholder: '--Source--',
                          name: 'source',
                          options: [
                            {key:"left", value:"left", text:"1 - Left"},
                            {key:"right", value: "right", text: "2 - Right"}
                          ]
                        };
export const methodStrikeOptions = {
                          placeholder: '--Method--',
                          name: 'method',
                          options: [
                            {key:"punch", value:"punch", text: "1 - Punch"},
                            {key:"elbox", value:"elbox", text: "2 - Elbox"},
                            {key:"kick", value:"kick", text: "3 - Kick"},
                            {key:"knee", value:"knee", text: "4 - Knee"},
                            {key:"unorthodox", value:"unorthodox", text: "5 - Unorthodox..."}
                          ]
                        };
export const targetOptions = {
                          placeholder: '--Target--',
                          name: 'target',
                          options: [
                            {key:"head", value:"head", text:"1 - Head"},
                            {key:"body", value: "body", text: "2 - Body"},
                            {key:"leg", value: "leg", text: "3 - Leg"}
                          ]
                        };

export const positionStrikeOptions = {
                        placeholder: '--Position--',
                        name: 'position',
                        options: [
                           {key:"distance", value:"distance", text:"1 - Distance"},
                           {key:"clinche", value: "clinche", text: "2 - Clinche"},
                           {key:"top_ground", value: "top_ground", text: "3 - Top Ground"},
                           {key:"neutral_ground", value: "neutral_ground", text: "4 - Neutral Ground"},
                           {key:"bottom_ground", value: "bottom_ground", text: "5 - Bottom Ground"},
                         ]
                       }
export const strategyOptions = {
                        placeholder: '--Strategy--',
                        name: 'strategy',
                        options: [
                          {key:"initiated", value:"initiated", text:"1 - Initiated"},
                          {key:"counter", value: "counter", text: "2 - Counter"}
                        ]
                      }
export const competencyOptions = {
                            placeholder: '--Competency--',
                            name: 'competency',
                            options: [
                              {key:"land", value:"land", text:"1 - Land"},
                              {key:"waste", value: "waste", text: "2 - Waste"}
                            ]
                          }

export const illegalOptions = {
                          placeholder: '--Illegal--',
                          name: 'illegal',
                          options: [
                           {key:"eye_poke", value:"eye_poke", text:"1 - Eye Poke"},
                           {key:"back_of_head", value: "back_of_head", text: "2 - Back-of-Head"},
                           {key:"groin", value: "groin", text: "3 - Groin"},
                           {key:"positional", value: "positional", text: "4 - Positional"},
                           {key:"other", value: "other", text: "5 - Other (specify)"},
                         ]
                       }

// Strike Defence

export const positionStrikeDefenceOptions = {
                        placeholder: '--Position--',
                        name: 'position',
                        options: [
                          {key:"distance", value:"distance", text:"1 - Distance"},
                          {key:"clinch", value: "clinch", text: "2 - Clinch"},
                          {key:"ground", value:"ground", text:"3 - Ground"}
                        ]
                      };
export const methodStrikeDefenceOptions = {
                        placeholder: '--Method--',
                        name: 'method',
                        options: [
                          {key:"block", value:"block", text:"1 - Block"},
                          {key:"deflect", value: "deflect", text: "2 - Deflect"},
                          {key:"dodge", value:"dodge", text:"3 - Dodge"},
                          {key:"leg_kick_check", value:"leg_kick_check", text:"4 - Leg kick check"},
                        ]
                      };

// Grapple

export const takedownAttemptOptions = {
                                 placeholder: '--Takedown Attempt--',
                                 name: 'takedown_attempt',
                                 options: [
                                   {key:"distance_shoot", value:"distance_shoot", text:"1 - Distance shoot"},
                                   {key:"clinch_upper_body", value: "clinch_upper_body", text: "2 - Clinch upper-body"},
                                   {key:"clinch_lower_body", value: "clinch_lower_body", text: "3 - Clinch lower-body"},
                                   {key:"leg_trip", value: "leg_trip", text: "4-Leg trip"},
                                   {key:"drag_from_ground", value: "drag_from_ground", text: "5 - Drag from ground"},
                                   {key:"offensive_guard", value: "offensive_guard", text: "6 - Offensive guard"},
                                 ]
                               }
export const submissionSecuredOptions = {
                                  placeholder: '--Submission Secured--',
                                  name: 'submission_secured',
                                  options: [
                                    {key:"standing", value:"standing", text:"1 - Standing"},
                                    {key:"top_ground", value: "top_ground", text: "2 - Top-ground"},
                                    {key:"bottom_ground", value: "bottom_ground", text: "2 - Bottom-ground"},
                                  ]
                                }
export const techniqueOptions = {
                                  placeholder: '--Technique--',
                                  name: 'technique',
                                  options: [
                                   {key:"rear_naked_choke", value:"rear_naked_choke", text:"1 - Rear Naked Choke"},
                                   {key:"guillotine_choke", value: "guillotine_choke", text: "2 - Guillotine Choke"},
                                   {key:"arm_triangle_choke", value: "arm_triangle_choke", text: "3 - Arm-Triangle Choke"},
                                   {key:"DArce_choke", value: "DArce_choke", text: "4 - D’Arce Choke"},
                                   {key:"triangle_choke", value: "triangle_choke", text: "5 - Triangle Choke"},
                                   {key:"other_choke", value: "other_choke", text: "6 - Other Choke (specify)"},
                                   {key:"arm_bar", value: "arm_bar", text: "7 - Arm-Bar"},
                                   {key:"kimura", value: "kimura", text: "8 - Kimura"},
                                   {key:"knee_bar", value: "knee_bar", text: "9 - Knee Bar"},
                                   {key:"ankle_lock", value: "ankle_lock", text: "10 - Ankle lock"},
                                   {key:"other_lock", value: "other_lock", text: "11 - Other Lock (specify)"},
                                   {key:"neck_crank", value: "neck_crank", text: "12 - Neck Crank (specify)"},
                                  ]
                                }
