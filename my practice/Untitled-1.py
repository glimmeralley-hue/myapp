print("Welcome to mood cat")
print("I am here to help you understand your mood better.")
mood = input("How are you feeling today? (happy, sad, angry, anxious, excited): ").strip().lower()
if mood == "happy":
    print("That's great to hear! Keep spreading the joy!")
elif mood == "sad":
    print("I'm sorry to hear that. Remember, it's okay to feel sad sometimes.")
elif mood == "angry":
    print("It's important to find healthy ways to express your anger. Take a deep breath!")
elif mood == "anxious":
    print("Try to focus on your breathing and take things one step at a time.")
elif mood == "excited":
    print("Yay! Enjoy the excitement and make the most of it!")