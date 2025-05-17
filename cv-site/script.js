// EDUCATION -- button and form
document.getElementById('add-education-btn').onclick = function() {
  document.getElementById('education-form').classList.remove('hidden');
  document.getElementById('edu-years').focus();
};
document.getElementById('cancel-education-btn').onclick = function() {
  document.getElementById('education-form').classList.add('hidden');
  document.getElementById('edu-years').value = '';
  document.getElementById('edu-school').value = '';
  document.getElementById('edu-specialty').value = '';
};
document.getElementById('save-education-btn').onclick = function() {
  const years = document.getElementById('edu-years').value.trim();
  const school = document.getElementById('edu-school').value.trim();
  const specialty = document.getElementById('edu-specialty').value.trim();
  if (years && school && specialty) {
    let p = document.createElement('p');
    p.innerHTML = `${years}<br />${school}<br />${specialty} <button class="remove-btn" onclick="this.parentNode.remove()">Sil</button>`;
    document.getElementById('education-section').appendChild(p);
    document.getElementById('education-form').classList.add('hidden');
    document.getElementById('edu-years').value = '';
    document.getElementById('edu-school').value = '';
    document.getElementById('edu-specialty').value = '';
  }
};

// SKILLS -- button and form
document.getElementById('add-skill-btn').onclick = function() {
  document.getElementById('skill-form').classList.remove('hidden');
  document.getElementById('skill-input').focus();
};
document.getElementById('cancel-skill-btn').onclick = function() {
  document.getElementById('skill-form').classList.add('hidden');
  document.getElementById('skill-input').value = '';
};
document.getElementById('save-skill-btn').onclick = function() {
  const skill = document.getElementById('skill-input').value.trim();
  if (skill) {
    let li = document.createElement('li');
    li.innerHTML = `${skill} <button class="remove-btn" onclick="this.parentNode.remove()">Sil</button>`;
    document.getElementById('skills-section').appendChild(li);
    document.getElementById('skill-form').classList.add('hidden');
    document.getElementById('skill-input').value = '';
  }
};

// LANGUAGES -- button and form
document.getElementById('add-language-btn').onclick = function() {
  document.getElementById('language-form').classList.remove('hidden');
  document.getElementById('language-input').focus();
};
document.getElementById('cancel-language-btn').onclick = function() {
  document.getElementById('language-form').classList.add('hidden');
  document.getElementById('language-input').value = '';
};
document.getElementById('save-language-btn').onclick = function() {
  const lang = document.getElementById('language-input').value.trim();
  if (lang) {
    let li = document.createElement('li');
    li.innerHTML = `${lang} <button class="remove-btn" onclick="this.parentNode.remove()">Sil</button>`;
    document.getElementById('languages-section').appendChild(li);
    document.getElementById('language-form').classList.add('hidden');
    document.getElementById('language-input').value = '';
  }
};

// PROFILE -- edit
document.getElementById('edit-profile-btn').onclick = function() {
  document.getElementById('profile-form').classList.remove('hidden');
  document.getElementById('profile-input').value = document.getElementById('profile-text').innerText.trim();
  document.getElementById('profile-input').focus();
};
document.getElementById('cancel-profile-btn').onclick = function() {
  document.getElementById('profile-form').classList.add('hidden');
};
document.getElementById('save-profile-btn').onclick = function() {
  const newText = document.getElementById('profile-input').value.trim();
  if (newText) {
    document.getElementById('profile-text').innerText = newText;
    document.getElementById('profile-form').classList.add('hidden');
  }
};

// WORK EXPERIENCE -- button and form
document.getElementById('add-work-btn').onclick = function() {
  document.getElementById('work-form').classList.remove('hidden');
  document.getElementById('work-company').focus();
};
document.getElementById('cancel-work-btn').onclick = function() {
  document.getElementById('work-form').classList.add('hidden');
  document.getElementById('work-company').value = '';
  document.getElementById('work-period').value = '';
  document.getElementById('work-description').value = '';
};
document.getElementById('save-work-btn').onclick = function() {
  const company = document.getElementById('work-company').value.trim();
  const period = document.getElementById('work-period').value.trim();
  const desc = document.getElementById('work-description').value.trim();
  if (company && period && desc) {
    let div = document.createElement('div');
    div.className = "job";
    div.innerHTML = `<h4>${company}</h4><div class="job-period">${period}</div><ul><li>${desc}</li></ul> <button class="remove-btn" onclick="this.parentNode.remove()">Sil</button>`;
    document.getElementById('work-section').appendChild(div);
    document.getElementById('work-form').classList.add('hidden');
    document.getElementById('work-company').value = '';
    document.getElementById('work-period').value = '';
    document.getElementById('work-description').value = '';
  }
};

// REFERENCES -- button and form
document.getElementById('add-reference-btn').onclick = function() {
  document.getElementById('reference-form').classList.remove('hidden');
  document.getElementById('ref-name').focus();
};
document.getElementById('cancel-reference-btn').onclick = function() {
  document.getElementById('reference-form').classList.add('hidden');
  document.getElementById('ref-name').value = '';
  document.getElementById('ref-position').value = '';
  document.getElementById('ref-address').value = '';
  document.getElementById('ref-phone').value = '';
  document.getElementById('ref-email').value = '';
};
document.getElementById('save-reference-btn').onclick = function() {
  const name = document.getElementById('ref-name').value.trim();
  const pos = document.getElementById('ref-position').value.trim();
  const addr = document.getElementById('ref-address').value.trim();
  const phone = document.getElementById('ref-phone').value.trim();
  const email = document.getElementById('ref-email').value.trim();
  if (name && pos && addr && phone && email) {
    let p = document.createElement('p');
    p.innerHTML = `<strong>${name}</strong><br />${pos}<br />${addr}<br />Tel: ${phone}<br />${email} <button class="remove-btn" onclick="this.parentNode.remove()">Sil</button>`;
    document.getElementById('reference-section').appendChild(p);
    document.getElementById('reference-form').classList.add('hidden');
    document.getElementById('ref-name').value = '';
    document.getElementById('ref-position').value = '';
    document.getElementById('ref-address').value = '';
    document.getElementById('ref-phone').value = '';
    document.getElementById('ref-email').value = '';
  }
};