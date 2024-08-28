const generateRandomNumber = (num) => {
    return Math.floor(Math.random() * num)
  }

  // store 'sports tips' in an object
  const sportsTips = {
    warmup: [
        'Always start with a dynamic warm-up to prevent injuries.',
        'Incorporate stretching into your routine for flexibility.',
        'Warm up with dynamic movements like jumping jacks or high knees.',
        'Hydrate properly before and after workouts.'
    ],
    training: [
        'Consistency is key; train regularly to see improvement.',
        'Progressive overload is essential for strength gains.',
        'Mix up your routine to avoid plateaus.',
        'Set specific, measurable goals for your training.'
    ],
    nutrition : [
        'Fuel your body with a balanced diet rich in protein and carbs.',
        'Eat small, frequent meals to maintain energy levels.',
        'Stay hydrated by drinking plenty of water.',
        'Consider supplements for specific needs like protein or vitamins.'
    ]
  };

  // store the 'sport tip' in an array
  let sportTip = []

  // iterate over the object
  for(let prop in sportsTips) {
    let optionIdx = generateRandomNumber(sportsTips[prop].length)

    // use the object's properties to customize the message
    switch(prop) {
        case 'warmup':
            sportTip.push(`For warmup: ${sportsTips[prop][optionIdx]}`)
            break
        case 'training':
            sportTip.push(`Then training: ${sportsTips[prop][optionIdx]}`)
            break
        case 'nutrition':
            sportTip.push(`Don't forget nutrition: ${sportsTips[prop][optionIdx]}`)
            break
        default:
            sportTip.push('There is not enough info.')
    }
  }

  formatTip = (sportTip) => {
    const formatted = sportTip.join('\n')
    console.log(formatted)
  }

  formatTip(sportTip);