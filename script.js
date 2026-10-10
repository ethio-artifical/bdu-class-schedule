const DAYS = ["Monday","Tuesday","Wednesday","Thursday","Friday"];
const PERIODS = [
  {n:1,time:"2:10–3:00"},{n:2,time:"3:10–4:00"},{n:3,time:"4:10–5:00"},{n:4,time:"5:10–6:00"},
  {n:5,time:"7:10–8:00"},{n:6,time:"8:10–9:00"},{n:7,time:"9:10–10:00"},{n:8,time:"10:10–11:00"}
];
// Entries transcribed from the uploaded Statistics and Data Science timetable.
// An asterisk in the source indicates a computer-lab period.
const courses = [
 {group:"Statistics · 2nd Year",title:"Basic Statistics",code:"Stat2011",credits:"3+2+1",teacher:"Frezer",room:"B190-R09",slots:[["Wednesday",[7,8]],["Friday",[3,4]]]},
 {group:"Statistics · 2nd Year",title:"Linear Algebra I",code:"Maths2031",credits:"3+1+1",teacher:"Dr. Assaye W.",room:"B190-R09",slots:[["Monday",[1,2]],["Tuesday",[1,2]]]},
 {group:"Statistics · 2nd Year",title:"Calculus I",code:"Maths2021",credits:"4+2+0",teacher:"Dr. Gurju A.",room:"B190-R09",slots:[["Tuesday",[3,4]],["Thursday",[5,6]],["Friday",[1,2]]]},
 {group:"Statistics · 2nd Year",title:"Introduction to Computer Science and Application",code:"Comp2011",credits:"3+0+2",teacher:"Mikru L.",room:"B190-R09",slots:[["Monday",[5,6,7]],["Wednesday",[3,4]]]},
 {group:"Statistics · 2nd Year",title:"Microeconomics",code:"Econ2012",credits:"3+0+0",teacher:"Juharia A.",room:"B190-R09",slots:[["Monday",[3,4]],["Wednesday",[5]]]},
 {group:"Statistics · 2nd Year",title:"Inclusiveness",code:"Incl2011",credits:"2+0+0",teacher:"TBA",room:"B190-R09",slots:[["Friday",[1,2]]]},
 {group:"Statistics · 3rd Year",title:"Sampling Theory",code:"Stat3031",credits:"4+2+0",teacher:"Kassahun A.",room:"166",slots:[["Monday",[1,2]],["Friday",[6,7,8]]]},
 {group:"Statistics · 3rd Year",title:"Regression Analysis",code:"Stat3041",credits:"3+1+1",teacher:"Demeke L.",room:"166",slots:[["Tuesday",[1,2]],["Wednesday",[7,8]],["Thursday",[4]]]},
 {group:"Statistics · 3rd Year",title:"Fundamentals of Database Systems",code:"Comp3021",credits:"3+0+2",teacher:"Derejaw L.",room:"166",slots:[["Tuesday",[3,4]],["Wednesday",[3,4]]]},
 {group:"Statistics · 3rd Year",title:"Statistical Computing I",code:"Stat3021",credits:"2+0+3",teacher:"Dereje T.",room:"Not specified",slots:[["Tuesday",[5,6]],["Friday",[1,2,3]]]},
 {group:"Statistics · 3rd Year",title:"Numerical Methods for Statistics",code:"Math3061",credits:"3+1+1",teacher:"Dr. Abdu M.",room:"166",slots:[["Monday",[3,4]],["Wednesday",[5,6]],["Thursday",[5]]]},
 {group:"Statistics · 3rd Year",title:"Macroeconomics",code:"Econ3033",credits:"3+0+0",teacher:"Getachew A.",room:"166",slots:[["Tuesday",[3,4]],["Friday",[5]]]},
 {group:"Statistics · 4th Year",title:"Statistical Theory of Distributions",code:"Stat4051",credits:"3+2+0",teacher:"Mr. Habtamu",room:"R17",slots:[["Monday",[1,2]],["Wednesday",[3,4]]]},
 {group:"Statistics · 4th Year",title:"Demography",code:"Stat4071",credits:"3+1+0",teacher:"Gashu W.",room:"R17",slots:[["Tuesday",[5,6]],["Thursday",[3,4]]]},
 {group:"Statistics · 4th Year",title:"Econometrics",code:"Stat4061",credits:"3+1+1",teacher:"TBA",room:"R17",slots:[["Monday",[3,4,7]],["Tuesday",[1,2]]]},
 {group:"Statistics · 4th Year",title:"Statistical Quality Control",code:"Stat4081",credits:"3+1+1",teacher:"TBA",room:"R17",slots:[["Monday",[8]],["Tuesday",[1,2]],["Thursday",[1,2]]]},
 {group:"Statistics · 4th Year",title:"Project I: Proposal Writing",code:"Stat4091",credits:"0+0+1",teacher:"Melkamu A.",room:"R17",slots:[]},
 {group:"Statistics · 4th Year",title:"Practical Attachments",code:"Stat4093",credits:"0+0+2",teacher:"Melkamu A.",room:"R17",slots:[]},
 {group:"Statistics · 4th Year",title:"Applied Spatial Statistics",code:"Stat41xxa",credits:"3+2+0",teacher:"Mr. Kassahun",room:"R17",slots:[["Tuesday",[3,4]],["Thursday",[1,2]]]},
 {group:"Data Science · 2nd Year Sec A",title:"Probability and Statistics",code:"Stat2011",credits:"3+2+0",teacher:"Frezer",room:"B190-R08",slots:[["Tuesday",[3,4]],["Thursday",[1,2]]]},
 {group:"Data Science · 2nd Year Sec A",title:"Introduction to Data Science",code:"DaSc2011",credits:"2+2+1",teacher:"Dr. Worku",room:"B190-R08",slots:[["Monday",[3,4]],["Wednesday",[1,2]]]},
 {group:"Data Science · 2nd Year Sec A",title:"Fundamentals of Programming with C++",code:"Comp2023",credits:"2+0+3",teacher:"Adane K.",room:"B190-R08",slots:[["Tuesday",[1,2,3]],["Thursday",[1,2]]]},
 {group:"Data Science · 2nd Year Sec A",title:"Calculus for Data Science",code:"Maths2021",credits:"3+2+0",teacher:"Dr. Hunegn",room:"B190-R08",slots:[["Tuesday",[7,8]],["Friday",[5,6]]]},
 {group:"Data Science · 2nd Year Sec A",title:"Programming Language for Data Science",code:"DaSc2013",credits:"3+0+2",teacher:"Anteneh Y.",room:"B190-R08",slots:[["Monday",[1,2]],["Tuesday",[5,6]]]},
 {group:"Data Science · 2nd Year Sec A",title:"Linear Algebra for Data Science",code:"Maths2023",credits:"3+2+0",teacher:"Dr. Assaye W.",room:"B190-R08",slots:[["Monday",[7,8]],["Wednesday",[3,4,5]]]},
 {group:"Data Science · 2nd Year Sec A",title:"Sampling Theory & Research Methods",code:"Stat2013",credits:"2+0+2",teacher:"Mr. Kassahu",room:"B190-R08",slots:[["Monday",[5,6,7,8]]]},
 {group:"Data Science · 2nd Year Sec B",title:"Probability and Statistics",code:"Stat2011",credits:"2+1+1",teacher:"Frezer",room:"B190-R08",slots:[["Monday",[1,2]],["Tuesday",[3,4]]]},
 {group:"Data Science · 2nd Year Sec B",title:"Introduction to Data Science",code:"DaSc2011",credits:"2+2+1",teacher:"Dr. Worku",room:"B190-R08",slots:[["Monday",[5,6]],["Thursday",[5,6]]]},
 {group:"Data Science · 2nd Year Sec B",title:"Fundamentals of Programming with C++",code:"Comp2023",credits:"2+0+3",teacher:"Anteneh Y.",room:"B190-R08",slots:[["Wednesday",[1,2,3]],["Friday",[1,2]]]},
 {group:"Data Science · 2nd Year Sec B",title:"Calculus for Data Science",code:"Maths2021",credits:"3+2+0",teacher:"Dr. Hunegn",room:"B190-R08",slots:[["Tuesday",[5,6]],["Friday",[3,4]]]},
 {group:"Data Science · 2nd Year Sec B",title:"Programming Language for Data Science",code:"DaSc2013",credits:"3+0+2",teacher:"Anteneh Y.",room:"B190-R08",slots:[["Wednesday",[5,6]],["Thursday",[8]],["Friday",[5,6]]]},
 {group:"Data Science · 2nd Year Sec B",title:"Linear Algebra for Data Science",code:"Maths2023",credits:"3+2+0",teacher:"Dr. Assaye W.",room:"B190-R08",slots:[["Thursday",[1,2]],["Friday",[7,8]]]},
 {group:"Data Science · 2nd Year Sec B",title:"Sampling Theory & Research Methods",code:"Stat2013",credits:"2+0+2",teacher:"Mr. Kassahu",room:"B190-R08",slots:[["Wednesday",[3,4]],["Thursday",[3,4]]]},
 {group:"Data Science · 3rd Year",title:"Database Management System",code:"Comp3021",credits:"3+0+2",teacher:"Asnakew",room:"R17",slots:[["Monday",[5,6]],["Friday",[3,4]]]},
 {group:"Data Science · 3rd Year",title:"Operational Research and Optimization Techniques",code:"Stat3071",credits:"3+2+0",teacher:"Birtukan F.",room:"R17",slots:[["Monday",[7,8]],["Friday",[5,6,7]]]},
 {group:"Data Science · 3rd Year",title:"Advanced Programming",code:"Comp3022",credits:"3+0+3",teacher:"Adane K.",room:"R17",slots:[["Tuesday",[5,6,7]],["Wednesday",[5,6,7]]]},
 {group:"Data Science · 3rd Year",title:"Discrete Mathematics",code:"Maths3051",credits:"3+2+0",teacher:"Mr. Danie",room:"R17",slots:[["Tuesday",[1,2]],["Thursday",[7,8]]]},
 {group:"Data Science · 3rd Year",title:"Statistical Theory and Inference",code:"Stat3072",credits:"4+2+2",teacher:"Mr. Habta",room:"R17",slots:[["Monday",[3,4]],["Tuesday",[3,4]],["Thursday",[5,6]]]},
 {group:"Data Science · 4th Year",title:"Multivariate Analysis",code:"Stat4082",credits:"3+1+2",teacher:"Berhanie",room:"R16",slots:[["Tuesday",[5,6,7]],["Friday",[1,2]]]},
 {group:"Data Science · 4th Year",title:"Data Mining",code:"Dsci4032",credits:"2+0+3",teacher:"Dr. Worku",room:"R16",slots:[["Thursday",[3,4]],["Friday",[5,6,7]]]},
 {group:"Data Science · 4th Year",title:"Introduction to Artificial Intelligence",code:"Dsci4031",credits:"3+0+3",teacher:"Anteneh Y.",room:"R16",slots:[["Monday",[3,4]],["Tuesday",[1,2]],["Thursday",[5,6,7]]]},
 {group:"Data Science · 4th Year",title:"Preliminary Project",code:"Dsci4041",credits:"2+0+1",teacher:"Dr. Worku",room:"Not specified",slots:[["Friday",[1,2]]]},
 {group:"Data Science · 4th Year",title:"Digital Marketing, Social Media & Web Development",code:"Dsci3023",credits:"2+3+0",teacher:"Adane K.",room:"R16",slots:[["Wednesday",[3,4]],["Thursday",[3,4]]]},
 {group:"Data Science · 4th Year",title:"Practical Attachment",code:"DSci3023",credits:"0+0+3",teacher:"Mr. Melka",room:"Not specified",slots:[]}
];

const palette = ["#356df3","#8a5ce6","#18a879","#e49b28","#e66d83","#2b9ab5"];
const groupFilter=document.getElementById("groupFilter"), teacherFilter=document.getElementById("teacherFilter"), dayFilter=document.getElementById("dayFilter");
const results=document.getElementById("scheduleResults"), emptyState=document.getElementById("emptyState");
let activeDay="all", currentView="cards", monthDate=new Date(2026,9,1);

function unique(arr){return [...new Set(arr)].sort((a,b)=>a.localeCompare(b))}
function fillSelect(select, values, firstLabel){values.forEach(v=>{const o=document.createElement("option");o.value=v;o.textContent=v;select.appendChild(o)})}
fillSelect(groupFilter,unique(courses.map(c=>c.group)));
fillSelect(teacherFilter,unique(courses.map(c=>c.teacher)));
document.getElementById("courseCount").textContent=courses.length;
document.getElementById("teacherCount").textContent=unique(courses.map(c=>c.teacher).filter(t=>t!=="TBA")).length;

// Keep consecutive periods for the same course/day together (e.g. 1–2, 3–4, or 5–7).
// If there is a gap, start a separate session (e.g. periods 3–4 and 7).
function expandCourse(c){
 return c.slots.flatMap(([day,periods])=>{
  const sorted=[...periods].sort((a,b)=>a-b), runs=[];
  sorted.forEach(p=>{
   const last=runs[runs.length-1];
   if(last && p===last[last.length-1]+1) last.push(p); else runs.push([p]);
  });
  return runs.map(run=>({course:c,day,period:run[0],periodEnd:run[run.length-1],periods:run,
   time:`${PERIODS.find(x=>x.n===run[0]).time.split('–')[0]}–${PERIODS.find(x=>x.n===run[run.length-1]).time.split('–')[1]}`}));
 });
}
function filteredEntries(){
 const g=groupFilter.value,t=teacherFilter.value,d=dayFilter.value;
 return courses.flatMap(expandCourse).filter(e=>(g==="all"||e.course.group===g)&&(t==="all"||e.course.teacher===t)&&(d==="all"||e.day===d)&&(activeDay==="all"||e.day===activeDay)).sort((a,b)=>DAYS.indexOf(a.day)-DAYS.indexOf(b.day)||a.period-b.period||a.course.title.localeCompare(b.course.title));
}
function render(){
 const entries=filteredEntries();
 document.getElementById("resultSummary").textContent=`Showing ${entries.length} scheduled period${entries.length===1?"":"s"}${groupFilter.value!=="all"?" for "+groupFilter.value:""}.`;
 results.innerHTML="";
 results.classList.toggle("table-view",currentView==="table");
 document.querySelectorAll(".view-btn").forEach(b=>b.classList.toggle("active",b.dataset.view===currentView));
 emptyState.classList.toggle("hidden",entries.length>0);results.classList.toggle("hidden",entries.length===0);
 if(currentView==="table"){
   const table=document.createElement("table");table.className="schedule-table";
   table.innerHTML="<thead><tr><th>Course</th><th>Code</th><th>Group</th><th>Day</th><th>Period</th><th>Time</th><th>Instructor</th><th>Room</th></tr></thead>";
   const tbody=document.createElement("tbody");
   entries.forEach(e=>{const tr=document.createElement("tr");tr.innerHTML=`<td><strong class="course-name-text">${e.course.title}</strong></td><td>${e.course.code}</td><td>${e.course.group}</td><td>${e.day}</td><td>${e.periodEnd===e.period?e.period:`${e.period}–${e.periodEnd}`}</td><td>${e.time}</td><td>${e.course.teacher}</td><td>${e.course.room}</td>`;tbody.appendChild(tr)});
   table.appendChild(tbody);results.appendChild(table);
 }else{
   entries.forEach((e,i)=>{const c=e.course;const card=document.createElement("article");card.className="course-card";card.style.setProperty("--accent",palette[unique(courses.map(x=>x.group)).indexOf(c.group)%palette.length]);card.innerHTML=`<div class="course-top"><span class="course-code">${c.code}</span><span class="course-day">${e.day} · Period ${e.periodEnd===e.period?e.period:`${e.period}–${e.periodEnd}`}</span></div><h3 class="course-name-text">${c.title}</h3><div class="course-meta"><span>◷ ${e.time}</span><span>▤ ${c.credits} Cr.Hr</span></div><div class="group-tag">${c.group}</div><div class="course-footer"><span>Instructor<br><strong>${c.teacher}</strong></span><span>Room<br><strong>${c.room}</strong></span></div>`;results.appendChild(card)});
 }
}
function clearFilters(){groupFilter.value="all";teacherFilter.value="all";dayFilter.value="all";activeDay="all";document.querySelectorAll(".day-tab").forEach(b=>b.classList.toggle("active",b.dataset.day==="all"));render()}
document.getElementById("applyFilters").addEventListener("click",render);
document.getElementById("resetFilters").addEventListener("click",clearFilters);
document.getElementById("clearEmpty").addEventListener("click",clearFilters);
[groupFilter,teacherFilter,dayFilter].forEach(el=>el.addEventListener("change",()=>{if(el===dayFilter){activeDay="all";document.querySelectorAll(".day-tab").forEach(b=>b.classList.toggle("active",b.dataset.day==="all"))}render()}));
document.querySelectorAll(".view-btn").forEach(b=>b.addEventListener("click",()=>{currentView=b.dataset.view;render()}));
document.querySelectorAll(".day-tab").forEach(b=>b.addEventListener("click",()=>{activeDay=b.dataset.day;dayFilter.value="all";document.querySelectorAll(".day-tab").forEach(x=>x.classList.toggle("active",x===b));render()}));

const freeType=document.getElementById("freeType"),freeEntity=document.getElementById("freeEntity"),freeDay=document.getElementById("freeDay");
function updateFreeEntity(){
 const type=freeType.value;let values=[];
 if(type==="group")values=unique(courses.map(c=>c.group));
 if(type==="teacher")values=unique(courses.map(c=>c.teacher));
 if(type==="room")values=unique(courses.map(c=>c.room));
 freeEntity.innerHTML="";fillSelect(freeEntity,values);renderFree();
}
function renderFree(){
 const type=freeType.value,entity=freeEntity.value,day=freeDay.value,occupied=new Map();
 courses.filter(c=>(type==="group"?c.group:type==="teacher"?c.teacher:c.room)===entity).forEach(c=>c.slots.filter(s=>s[0]===day).forEach(s=>s[1].forEach(p=>occupied.set(p,c))));
 const container=document.getElementById("freeResults");container.innerHTML="";
 PERIODS.forEach(p=>{const c=occupied.get(p.n),chip=document.createElement("div");chip.className="period-chip"+(c?" busy":"");chip.textContent=c?`P${p.n} · ${p.time} · Busy`:`P${p.n} · ${p.time} · Free`;chip.title=c?c.title:"No scheduled class found in entered data";container.appendChild(chip)});
}
freeType.addEventListener("change",updateFreeEntity);freeEntity.addEventListener("change",renderFree);freeDay.addEventListener("change",renderFree);

function renderCalendar(){
 const year=monthDate.getFullYear(),month=monthDate.getMonth();
 document.getElementById("monthLabel").textContent=monthDate.toLocaleDateString("en-US",{month:"long",year:"numeric"});
 const grid=document.getElementById("calendarDays");grid.innerHTML="";
 const first=new Date(year,month,1),offset=(first.getDay()+6)%7,days=new Date(year,month+1,0).getDate(),prevDays=new Date(year,month,0).getDate();
 for(let i=0;i<42;i++){
  let n,muted=false,date;
  if(i<offset){n=prevDays-offset+i+1;muted=true;date=new Date(year,month-1,n)}
  else if(i>=offset+days){n=i-offset-days+1;muted=true;date=new Date(year,month+1,n)}
  else{n=i-offset+1;date=new Date(year,month,n)}
  const el=document.createElement("div");el.className="calendar-day"+(muted?" muted":"")+(date.getDay()===0||date.getDay()===6?" weekend":"");
  if(year===2026&&month===9&&n===9&&!muted)el.classList.add("today");
  el.textContent=n;grid.appendChild(el);
 }
}
document.getElementById("prevMonth").addEventListener("click",()=>{monthDate.setMonth(monthDate.getMonth()-1);renderCalendar()});
document.getElementById("nextMonth").addEventListener("click",()=>{monthDate.setMonth(monthDate.getMonth()+1);renderCalendar()});
updateFreeEntity();renderCalendar();render();

