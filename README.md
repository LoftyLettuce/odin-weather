# odin-todo-list
got problem with width of div inside .big
solution:
set width of .big = 100% .small
then every div inside .big = 100% .big
- got problem with cloud background with textContent in announcement board, grid won't separate into rows, thinking it might have something to do with the 100% above or something might be wrong with the height.
- its actually did separate into 2 rows but when insert content the structure got broken.
solution:
accidentally write ".big div" instead of ".big>div" cause every div in .big expand its height
