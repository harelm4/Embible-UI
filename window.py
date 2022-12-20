from PyQt5 import QtWidgets
from PyQt5.QtWidgets import QApplication,QMainWindow

import sys
from src.UI.styles import css


class Window(QMainWindow):
    def __init__(self):
        self.app = QApplication(sys.argv)
        super(Window,self).__init__()
        self.setGeometry(100,100,1600,800)
        self.setStyleSheet(css)
        self.set
        self.initUI()
    def initUI(self):
        # self.lable=QtWidgets.QLabel(self)
        # self.lable.setText('hello')
        # self.lable.move(10,10)
        self.pathInput=QtWidgets.QTextEdit(self)
        self.pathInput.setGeometry(100,10,300,40)

        self.loadBtn = QtWidgets.QPushButton('Load text', self)
        # self.loadBtn.move(100, 70)
        self.loadBtn.clicked.connect(self.loadTextFile)
    def showWin(self):
        self.show()
        sys.exit(self.app.exec_())
    def loadTextFile(self):
        print('!')

